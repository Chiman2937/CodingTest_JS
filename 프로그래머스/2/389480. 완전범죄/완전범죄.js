function solution(info, n, m) {
    info.sort((a,b)=>{
        const aRatio = a[0] / a[1];
        const bRatio = b[0] / b[1];
        return aRatio !== bRatio ? bRatio - aRatio : b[1] - a[1]
    });
    for(let i = 0; i < info.length ; i++){
        if(m > info[i][1]){
            m-=info[i][1];
            info[i] = [0,0];
        }
    }
    let asum = info.reduce((a,c)=>a+c[0],0);
    return asum >= n ? -1 : asum;
}