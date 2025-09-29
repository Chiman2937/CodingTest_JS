function solution(N, stages) {
    let answer = new Array(N).fill(0);
    stages = stages.sort((a,b)=>a-b)
    // return stages;
    for(let i=1;i<=N;i++){
        const index = stages.lastIndexOf(i)
        answer[i-1] = [i, (index+1) / stages.length]
        stages = stages.slice(index+1)
    }
    return answer.sort((a,b)=>b[1]-a[1]).map((v)=>v[0]);
    // return answer;
}