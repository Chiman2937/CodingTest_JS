function solution(numbers) {
    numbers = numbers.map((v)=>String(v)).sort((a,b)=>{
        if(a+b >= b+a) return 1;
        return -1;
    }).reverse();
    let result = numbers.join("");
    if(Number(result) === 0) return "0";
    return result;
}