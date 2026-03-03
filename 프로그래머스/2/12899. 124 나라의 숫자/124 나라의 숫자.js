function solution(n) {
    let answer = "";
    while(n > 0){
        if(n%3 === 0){
            answer="4"+answer
        } else {
            answer=(n%3) + answer
        }
        n=Math.ceil(n/3)-1
    }
    return answer;
}