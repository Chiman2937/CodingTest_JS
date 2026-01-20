function solution(n,a,b){
    const indexA = a - 1;
    const indexB = b - 1;
    const divider = n / 2;
    const groupA = ~~(indexA / divider);
    const groupB = ~~(indexB / divider);
    if(groupA === groupB) return solution(divider, (indexA % divider) + 1, (indexB % divider) + 1);
    return Math.log2(n);
}