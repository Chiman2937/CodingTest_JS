function solution(brown, yellow) {
    for(let i = 1;i<=Math.sqrt(yellow);i++){
        if(yellow % i === 0){
            const w = yellow / i
            const h = i
            if(2*(w+h)+4 === brown) return [w+2,h+2]
        }
    }
}