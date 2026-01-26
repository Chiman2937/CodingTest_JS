function solution(infoList, queryList) {
    let result = [];
    // Map 생성
    const infoMap = new Map();
    
    for(const info of infoList){
        // backtrack으로 string, - 의 조합 생성
        const arr = info.split(' ');
        function backTrack(str, index){
            if(index === 4){
                if(!infoMap.get(str)) infoMap.set(str,[]);
                infoMap.get(str).push(arr[4]);
                return;
            }
            backTrack(str+arr[index], index+1);
            backTrack(str+ "-", index+1)
        }
        backTrack("",0)
    }
    
    for(const [key,value] of infoMap){
        value.sort((a,b)=>a-b)
    }
    
    // query 키 파싱
    for(const query of queryList){
        let queryKey = query.split(' ').filter((v)=>v !== 'and');
        const score = queryKey.pop();
        queryKey = queryKey.join('');
        let scoreList = infoMap.get(queryKey) ?? [];
        // 점수 이분탐색
        let firstIndex = 0;
        let lastIndex = scoreList.length;
        while(firstIndex < lastIndex){
            let currentIndex = ~~((lastIndex + firstIndex)/2);
            if(Number(scoreList[currentIndex]) >= Number(score)){
                lastIndex = currentIndex;
            } else {
                firstIndex = currentIndex + 1;
            }
        }
        result.push(scoreList.length - firstIndex);
    }
    return result;
}