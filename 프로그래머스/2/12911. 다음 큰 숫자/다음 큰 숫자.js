function solution(n) {
    const l = n.toString(2).split("").filter((v)=>v==="1").length;
    while(true){
        n++;
        if(n.toString(2).split("").filter((v)=>v==="1").length === l){
            return n;
        }
    }
}