function solution(fees, records) {
    const list = new Map;
    for(const record of records){
        const [t, number, type] = record.split(' ');
        const minutes = getMinutes(t)
        list.set(number,(list.get(number)||0)+(type==="IN" ? -minutes : minutes))
    }
    return [...list].sort((a,b)=>a[0]<b[0] ? -1 : 1).map(([number,t])=>{
        
        const minutes = t <= 0 ? t + getMinutes("23:59") : t
        console.log(number,minutes)
        if (minutes <= fees[0]) return fees[1];
        // console.log(fees[1],Math.max((minutes - fees[0])/fees[2]),fees[3])
        return fees[1] + Math.ceil((minutes - fees[0])/fees[2]) * fees[3]
    })
    // return [...list].map((v)=>v[1]<0 ? [v[0],v[1]+getMinutes("23:59")] : v)
}

function getMinutes(t) {
    return Number(t.split(':')[0]) * 60 + Number(t.split(':')[1])
}