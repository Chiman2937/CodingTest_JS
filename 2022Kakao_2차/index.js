const X_AUTH_TOKEN = 'f0366b17c1c6ec79585ba196';
const BASE_URL =
  'https://huqeyhi95c.execute-api.ap-northeast-2.amazonaws.com/prod';

let auth_key;

const userGrades = new Map();
const userWins = new Map();
const userLoses = new Map();

const startAPI = async (problem) => {
  const res = await fetch(`${BASE_URL}/start`, {
    method: 'POST',
    headers: {
      'X-Auth-Token': X_AUTH_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ problem }),
  });

  const data = await res.json();
  auth_key = data.auth_key;
  console.log(`Start Simulation, problem: ${problem}, auth_key: ${auth_key}`);
};

const httpClient = async (method, endPoint, body) => {
  let options = {
    method,
    headers: {
      Authorization: auth_key,
      'Content-Type': 'application/json',
    },
  };
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(`${BASE_URL}/${endPoint}`, options);
  const data = await res.json();
  return data;
};

// {
//   "waiting_line": [
//     { "id": 1, "from": 3 },
//     { "id": 2, "from": 14 },
//     ...
//   ]
// }
const getWaitingLineAPI = async () => {
  const data = await httpClient('GET', 'waiting_line');
  return data.waiting_line || [];
};

// {
//   "game_result": [
//     {"win": 10, "lose": 2, "taken": 7 },
//     {"win": 7, "lose": 12, "taken": 33 },
//     ...
//   ]
// }
const getGameResultAPI = async () => {
  const data = await httpClient('GET', 'game_result');
  return data.game_result || [];
};

// {
//   "user_info": [
//     { "id": 1, "grade": 2100 },
//     { "id": 13, "grade": 1501 },
//     ...
//   ]
// }
const getUserInfoAPI = async () => {
  const data = await httpClient('GET', 'user_info');
  return data.user_info || [];
};

const matchAPI = async (pairs) => {
  const data = await httpClient('PUT', 'match', { pairs });
  return data;
};

const changeGradeAPI = async (commands) => {
  const data = await httpClient('PUT', 'change_grade', { commands });
  return data;
};

const getScoreAPI = async () => {
  const data = await httpClient('GET', 'score');
  return data;
};

const setInitialGrade = async () => {
  const initialGrade = 5000;
  const users = await getUserInfoAPI();
  for (const user of users) {
    userGrades.set(user.id, initialGrade);
    userWins.set(user.id, 0);
    userLoses.set(user.id, 0);
  }
  await syncGrade();
  console.log(
    `initialize ${users.length} users, reset to Grade: ${initialGrade}`
  );
};

const syncGrade = async () => {
  const commands = [];
  for (const [id, grade] of [...userGrades]) {
    commands.push({ id, grade });
  }
  await changeGradeAPI(commands);
};

const updateGrade = (winnerId, loserId) => {
  const winnerGames = userWins.get(winnerId) + userLoses.get(winnerId);
  const loserGames = userWins.get(loserId) + userLoses.get(loserId);

  let Kwinner;
  let Kloser;
  if (winnerGames < 5) Kwinner = 200;
  else if (winnerGames < 10) Kwinner = 100;
  else Kwinner = 50;
  if (loserGames < 5) Kloser = 200;
  else if (loserGames < 10) Kloser = 100;
  else Kloser = 50;

  userGrades.set(winnerId, userGrades.get(winnerId) + Kwinner);
  userGrades.set(loserId, userGrades.get(loserId) - Kloser);
  userWins.set(winnerId, userWins.get(winnerId) + 1);
  userLoses.set(loserId, userLoses.get(loserId) + 1);
};

const createMatches = (waitingLine, turn) => {
  const pairs = [];
  const waiters = waitingLine
    .map((user) => ({
      id: user.id,
      wait: turn - user.from,
      grade: userGrades.get(user.id),
    }))
    .sort((a, b) => b.wait - a.wait);
  const matchers = new Set();
  for (let i = 0; i < waiters.length; i++) {
    if (matchers.has(waiters[i].id)) continue;
    let bestMatcher = null;
    let bestScore = Infinity;
    const scoreRange = 300 + waiters[i].wait * 300;
    for (let j = i + 1; j < waiters.length; j++) {
      if (matchers.has(waiters[j].id)) continue;
      const scoreDiff = Math.abs(waiters[i].grade - waiters[j].grade);
      if (scoreDiff < bestScore && scoreDiff <= scoreRange) {
        bestMatcher = waiters[j];
        bestScore = scoreDiff;
      }
    }
    if (bestMatcher) {
      matchers.add(waiters[i].id);
      matchers.add(bestMatcher.id);
      pairs.push([waiters[i].id, bestMatcher.id]);
    }
  }
  return pairs;
};

const runGame = async () => {
  await startAPI(1);
  await setInitialGrade();
  for (let turn = 1; turn <= 595; turn++) {
    //게임 결과 호출
    const results = await getGameResultAPI();
    //등급 업데이트
    for (const result of results) {
      const { win, lose } = result;
      updateGrade(win, lose);
    }
    // 등급 동기화
    await syncGrade();
    if (turn <= 555) {
      //대기열 요청
      const waitingLine = await getWaitingLineAPI();
      //매칭 생성
      const pairs = createMatches(waitingLine, turn);
      //매칭 요청
      console.log(
        `Turn ${turn}, waiting ${waitingLine.length} players, matched ${pairs.length} pairs`
      );
      await matchAPI(pairs);
    } else {
      //매칭 스킵
      console.log(`Turn ${turn}, processing...`);
      await matchAPI([]);
    }
  }
  await matchAPI([]);
  console.log([...userGrades]);
  const score = await getScoreAPI();
  console.log(score);
};

runGame();

// {
//   status: 'finished',
//   efficiency_score: '95.2722',
//   accuracy_score1: '55.5556',
//   accuracy_score2: '57.68',
//   score: '212.1005'
// }
