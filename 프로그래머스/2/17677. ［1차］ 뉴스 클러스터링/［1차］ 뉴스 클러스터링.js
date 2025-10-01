function solution(str1, str2) {
    const regex = /^[a-z]+$/
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const str1_map = new Map;
    const str2_map = new Map;
    for(let i=0;i<Math.max(str1.length,str2.length);i++){
        const str1_sub = str1.substring(i,i+2)
        const str2_sub = str2.substring(i,i+2)
        if(regex.test(str1_sub)&&str1_sub.length===2) str1_map.set(str1_sub,(str1_map.get(str1_sub)||0)+1)
        if(regex.test(str2_sub)&&str2_sub.length===2) str2_map.set(str2_sub,(str2_map.get(str2_sub)||0)+1)
    }
    let same = 0;
    for(const [key,count1] of str1_map){
        const count2 = str2_map.get(key)||0;
        same+=Math.min(count1,count2)
        str1_map.set(key,(str1_map.get(key)||0)-Math.min(count1,count2))
        str2_map.set(key,(str2_map.get(key)||0)-Math.min(count1,count2))
    }
    const str1_only = [...str1_map].reduce((a,c)=>a+c[1],0)
    const str2_only = [...str2_map].reduce((a,c)=>a+c[1],0)
    if(same+str1_only+str2_only===0) return 65536
    return ~~(same / (same+str1_only+str2_only)*65536)
}