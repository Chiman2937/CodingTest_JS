function solution(want, number, discount) {
    let result = 0;
    let wantMap = new Map();
    for(const w of want){
        wantMap.set(w,0);
    }
    
    for(let i = 0; i < 10; i++){
        if(wantMap.get(discount[i])!==undefined){
            wantMap.set(discount[i],wantMap.get(discount[i])+1)
        }
    }
    if([...wantMap].every((v,i)=>v[1]>=number[i])) result++;
    
    for(let i = 10; i < discount.length; i++){
        if(wantMap.get(discount[i])!==undefined){
            wantMap.set(discount[i],wantMap.get(discount[i])+1)
        }
        if(wantMap.get(discount[i-10])!==undefined){
            wantMap.set(discount[i-10],wantMap.get(discount[i-10])-1)
        }
        if([...wantMap].every((v,i)=>v[1]>=number[i])) result++;
    }
    return result;
}