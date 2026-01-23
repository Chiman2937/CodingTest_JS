function solution(n) {
    let a = 0;
    let b = 1;
    for(let i = 0; i<n;i++){
        const temp = (a + b) % 1000000007;
        a = b;
        b = temp;
    }
    return b;
}