function solution(n, k) {
    let answer = 0;
    const arr = n.toString(k).split(0)
    console.log(arr);
    for(const v of arr){
        if(getIsPrime(v)) answer++
    }
    return answer;
}

function getIsPrime(v){
    if(v<=1) return false;
    let isPrime=true;
    for(let i=2;i<=Math.sqrt(v);i++){
        if(v%i===0){
            isPrime=false
            break;
        }
    }
    return isPrime;
}