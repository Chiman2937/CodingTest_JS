function solution(n, left, right) {
    let result = [];
    for(let i = left;i <= right;i++){
        const row = ~~(i / n);
        const col = i % n;
        result.push(Math.max(row,col)+1);
    }
    return result;
}