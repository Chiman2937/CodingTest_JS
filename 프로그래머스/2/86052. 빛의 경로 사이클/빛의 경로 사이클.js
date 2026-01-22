function solution(grid) {
    // 결과
    let result = [];
    // 방문하지 않은 좌표 목록
    let notVisitSet = new Set();
    const dirMap = [[0,1],[1,0],[0,-1],[-1,0]];
    // 배열의 높이, 너비
    const rows = grid.length;
    const cols = grid[0].length;
    // notVisitMap 초기화
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            for(let dir=0;dir<4;dir++){
                notVisitSet.add(`${row},${col},${dir}`)
            }
        }
    }
    // notVisitMap이 빌 때까지 while문 반복
    // while(notVisitSet.size > 0){
    for(const startKey of notVisitSet){
        // let startKey = notVisitSet.values().next().value;
        let [startRow,startCol,startDir] = startKey.split(',').map(Number);
        let moveCount = 0;
        let row = startRow;
        let col = startCol;
        let dirIndex = startDir;
        while(true){
            const key = `${row},${col},${dirIndex}`
            // 방문 했으면 탈출
            if(!notVisitSet.has(key)) break;
            // 방문처리
            notVisitSet.delete(key);
            moveCount++;
            // 진행 방향 계산
            const dirX = dirMap[dirIndex][0];
            const dirY = dirMap[dirIndex][1];
            // 도착 위치 정보
            row = (rows + row + dirX) % rows;
            col = (cols + col + dirY) % cols;
            // 다음 진행방향 설정
            const dest = grid[row][col];
            switch(dest){
                case "L":
                    dirIndex = (4 + dirIndex - 1) % 4;
                    break;
                case "R":
                    dirIndex = (4 + dirIndex + 1) % 4;
                    break;
            }
        }
        result.push(moveCount);
    }
    return result.sort((a,b)=>a-b);
}
