function solution(numbers, target) {
    let answer = 0;
    let sum = 0;
    let index = 0;
    const calc = (index) => {
        if(index>numbers.length-1){
            if(sum===target) answer++
            return;
        }
        sum+=numbers[index]
        calc(index+1)
        sum-=numbers[index]
        sum-=numbers[index]
        calc(index+1)
        sum+=numbers[index]
    }
    calc(index)
    return answer;
}