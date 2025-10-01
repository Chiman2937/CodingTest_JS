function solution(dartResult) {
    const powMap = ['S','D','T'];
    let calc = ''
    let answer = [];
    for(let i =0;i<dartResult.length;i++){
        if(Number(dartResult.substring(i,i+2))){
            calc+=dartResult.substring(i,i+2)
            i+=1
        } else if(Number(dartResult[i]) >= 0){
            calc+=dartResult[i]
        } else {
            if(powMap.includes(dartResult[i])){
                calc = Math.pow(calc,powMap.indexOf(dartResult[i])+1)
            } else if(dartResult[i] === "*"){
                if(answer.length>0) answer[answer.length-1]*=2
                calc = calc * 2
            } else if(dartResult[i] === "#"){
                calc = -calc
            }
            if (Number(dartResult[i+1])>=0){
                answer.push(calc)
                calc = ""
            }
        }
    }
    return answer.reduce((a,c)=>a+c) + calc
}