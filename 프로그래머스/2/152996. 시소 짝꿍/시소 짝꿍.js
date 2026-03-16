function solution(weights) {
    weights.sort((a,b)=>b-a)
    let result = 0;
    let ratios = [
        [1,1],
        [2,3],
        // [3,2],
        [2,4],
        // [4,2],
        [3,4],
        // [4,3]
    ]
    
    let map = new Map();
    
    for (const w of weights){
        for(const [d1,d2] of ratios) {
            if((w * d2) % d1 === 0){
                const partner = (w * d2) / d1;
                result+=(map.get(partner)) ?? 0
            }
        }
        map.set(w, (map.get(w) ?? 0) + 1)
    }
    return result;
}

