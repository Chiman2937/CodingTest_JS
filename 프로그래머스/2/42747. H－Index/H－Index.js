function solution(citations) {
    // 6 5 3 1 0
    citations.sort((a,b)=>b-a);
    const n = citations.length;
    let hIndex = 0;
    for(let i=0;i<n;i++){
        if(citations[i] >= i+1) hIndex++;
    }
    return hIndex;
}