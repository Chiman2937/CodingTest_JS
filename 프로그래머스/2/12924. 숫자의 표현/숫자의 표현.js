function solution(n) {
    let answer =0;
    for(let i=1;i<=n;i++){
        const f = fact(i-1)
        if(f >= n) break;
        if((n - f) % i === 0) answer++
    }
    return answer;
}

function fact(n){
    let answer = 0;
    for(let i=1;i<=n;i++){
        answer+=i
    }
    return answer;
}