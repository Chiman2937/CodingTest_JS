function solution(clothes) {
    const listMap = new Map();
    for(const [item,category] of clothes){
        listMap.set(category,(listMap.get(category)||0)+1)
    }
    return [...listMap].reduce((a,c)=>a*(c[1]+1),1) - 1
}