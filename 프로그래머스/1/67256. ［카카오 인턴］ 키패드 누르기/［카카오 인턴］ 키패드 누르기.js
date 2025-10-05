function solution(numbers, hand) {
    let answer = ""
    let posL = [3,0]
    let posR = [3,2]
    hand = hand.substring(0,1).toUpperCase();
    for(const number of numbers){
        const target = number===0? [3,1] : [~~((number-1)/3),(number - 1) % 3] 
        const distanceL = getDistance(posL,target)
        const distanceR = getDistance(posR,target)
        if(target[1]===0){
            posL = target;
            answer+="L"
        }
        if(target[1]===2){
            posR = target;
            answer+="R"
        }
        if(distanceL < distanceR && target[1]===1){
            posL = target;
            answer+="L"
        }
        if(distanceL > distanceR && target[1]===1){
            posR = target;
            answer+="R"
        }
        if(distanceL === distanceR && target[1]===1){
            if(hand === "L") posL = target;
            if(hand === "R") posR = target;
            answer+=hand
        }
    }
    return answer;
}

function getDistance(pos1,pos2){
    const [r1,c1] = pos1
    const [r2,c2] = pos2
    return Math.abs(r2-r1) + Math.abs(c2-c1)
}