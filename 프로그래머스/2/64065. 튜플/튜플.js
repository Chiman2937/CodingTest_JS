function solution(s) {
    let result = new Set();
    s = s.substring(2,s.length-2);
    s = s.split("},{");
    s.sort((a,b)=>a.length - b.length);
    s = s.map((v)=>v.split(",")).flat();
    for(const num of s){
        result.add(num);
    }
    return [...result].map((v)=>Number(v));
}