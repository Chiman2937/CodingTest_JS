function solution(k, tangerine) {
    const listMap = new Map();
    for(const t of tangerine){
        listMap.set(t,(listMap.get(t)||0)+1);
    }
    const listArray = [...listMap].sort((a,b)=>b[1]-a[1]);
    let count = 0;
    let index = 0;
    while(count<k){
        count+=listArray[index][1];
        index++;
    }
    return index;
}