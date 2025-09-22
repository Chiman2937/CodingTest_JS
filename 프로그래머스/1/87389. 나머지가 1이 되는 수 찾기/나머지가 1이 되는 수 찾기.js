function solution(n) {
    const v = n-1;
    for(i=2;i<=Math.sqrt(v);i++){
        if (v % i === 0) return i;
    }
    return v;
}