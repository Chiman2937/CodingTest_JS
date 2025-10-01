function solution(cacheSize, cities) {
    let cache = [];
    let answer = 0;
    for(const c of cities){
        const city = c.toLowerCase();
        const cacheIndex = cache.indexOf(city);
        if(cacheIndex>-1) answer++
        else answer+=5;
        cache = [...cache.slice(0,cacheIndex),...cache.slice(cacheIndex+1)]
        cache.unshift(city);
        cache.length = cacheSize;
    }
    return answer;
}