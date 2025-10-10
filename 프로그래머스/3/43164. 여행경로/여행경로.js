function solution(tickets) {
    const answer = []
    function dfs(arr,current){

        if(arr.length === 0) answer.push(current)
        for(let i=0;i<arr.length;i++){
            const next = arr[i]
            if(current[current.length-1] === next[0]){
                dfs([...arr.slice(0,i),...arr.slice(i+1)],[...current,next[1]])
            }
        }
    }

    dfs(tickets,["ICN"])

    return answer.sort((a,b)=>{
        for(let i=0;i<a.length;i++){
            if(a[i] === b[i]) continue;
            return a[i] < b[i] ? -1 : 1
        }
    })[0]
}