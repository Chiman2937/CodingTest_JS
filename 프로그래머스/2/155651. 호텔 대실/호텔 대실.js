function solution(book_time) {
    let answer = 1;
    book_time = book_time.map((v)=>[[v[0],1],[getFinalFinishedTime(v[1]),-1]]);
    const time_list = book_time.flat().sort();
    const cum_list = new Array(time_list.length).fill(0);
    cum_list[0] = 1;
    for(let i = 1; i< time_list.length; i++){
        cum_list[i] = time_list[i][1] + cum_list[i-1];
        answer = Math.max(cum_list[i], answer);
    }
    return answer;
}

const getFinalFinishedTime = (time) => {
    const [hour,minute] = time.split(':').map((v)=>Number(v));

    const nextHour = String(hour+~~((minute+10)/60)).padStart(2,'0');
    const nextMinute = String((minute+10)%60).padStart(2,'0');

    return `${nextHour}:${nextMinute}`;
}