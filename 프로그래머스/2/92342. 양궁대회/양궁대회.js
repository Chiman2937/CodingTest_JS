function solution(n, info) {
    let result = [0,0,-1];
    let arr = [];
    let a_score = 0;
    let r_score = 0;
    let low_score = 0;
    const sum = (index) => {
        if(index === info.length) {
            if(n!==0) return;
            if(r_score===a_score) return;
            if(result[0]<r_score-a_score || result[0]===r_score-a_score && result[1] < low_score)
                result=[r_score-a_score,low_score,...arr]
            
            return;
        }

        a_score += info[index] > 0 ? info.length-1-index : 0
        arr.push(0);
        sum(index+1)
        a_score -= info[index] > 0 ? info.length-1-index : 0
        arr.pop();
        if (n>0){
            const next = n >= info[index]+1 ? info[index]+1 : n
            const base_low_score = low_score
            n-=next
            a_score += info[index] >= next ? info.length-1-index : 0
            r_score += info[index] < next ? info.length-1-index : 0
            low_score=index;
            arr.push(next)
            
            sum(index+1)
            
            n+=next
            a_score -= info[index] >= next ? info.length-1-index : 0
            r_score -= info[index] < next ? info.length-1-index : 0
            low_score=base_low_score;
            arr.pop();
        }
    }
    sum(0);
    result.shift()
    result.shift()
    return result
}

console.log(solution(3, [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1]))