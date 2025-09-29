function solution(progresses, speeds) {
    let answer = [];
    while(progresses.length > 0){
        const days = Math.ceil((100 - progresses[0])/speeds[0])
        progresses = progresses.map((v,i)=>v+(speeds[i]*days));
        let publishCount = 0;
        while(progresses[0]>=100){
            publishCount++;
            progresses.shift();
            speeds.shift();
        }
        answer.push(publishCount);
    }
    return answer
    
}