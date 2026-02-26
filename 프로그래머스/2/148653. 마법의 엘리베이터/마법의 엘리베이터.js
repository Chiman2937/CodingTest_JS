function solution(storey) {
    let result = 0;
    while(storey > 0){
        const digit = String(storey).length
        const count = Math.round((storey-0.1) / 10**(digit - 1));
        result += count >= 6 ? 10 - count + 1 : count;
        storey = Math.abs(count * 10**(digit-1) - storey);
    }
    return result;
}