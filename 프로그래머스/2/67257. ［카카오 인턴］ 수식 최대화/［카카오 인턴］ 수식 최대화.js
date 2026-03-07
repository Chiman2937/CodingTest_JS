function solution(expression) {
    let num = ""
    let list = [];
    for(let i = 0; i < expression.length; i++){
        const nextStr = expression[i];
        if(nextStr === "+" || nextStr === "-" || nextStr === "*"){
            list.push(Number(num));
            list.push(nextStr);
            num = ""
        } else {
            num+=nextStr;
        }
    }
    list.push(Number(num));
    
    const op_rank_list = ["+-*","+*-","-+*","-*+","*+-","*-+"];
    
    let answer = 0
    
    for(const rank of op_rank_list){
        let cal_list = [...list]
        // console.log(`탐색시작: ${rank}`)
        for(let o = 0; o < rank.length; o++){
            const op = rank[o]; // + - *
            // console.log(cal_list,op)
            for (let i = 1;i < cal_list.length-1;i+=2){
                if(cal_list[i] === op){
                    const num1 = cal_list[i-1];
                    const num2 = cal_list[i+1];
                    cal_list.splice(i-1,3,calculate(num1,num2,cal_list[i]))
                    i-=2
                }
            }
        }
        const val = Math.abs(cal_list[0])
        if(val > answer) answer = val;
    }
    
    return answer
}

function calculate (num1,num2,operator){
    if(operator === "+") return num1+num2;
    if(operator === "-") return num1-num2;
    if(operator === "*") return num1*num2;
}