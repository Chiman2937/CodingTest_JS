function solution(n, lost, reserve) {
    
    lost.sort((a,b)=>a-b)
    reserve.sort((a,b)=>a-b)
    
    let realLost = lost.filter((v)=>!reserve.includes(v))
    let realReserve = reserve.filter((v)=>!lost.includes(v))
    
    let count = n-realLost.length;
    
    for(let i=0;i<realLost.length;i++){
        for(let j=0;j<realReserve.length;j++){
            if(realLost[i] === realReserve[j]-1 || realLost[i] === realReserve[j]+1){
                realLost = [...realLost.slice(0,i),...realLost.slice(i+1)]
                i--;
                realReserve = [...realReserve.slice(0,j),...realReserve.slice(j+1)]
                j--;
                count++
            }
        }
    }
    return count
}