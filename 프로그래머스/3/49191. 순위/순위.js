function solution(n, results) {
    const graph = new Array(n).fill(0).map((v)=>new Array(n).fill(0))
    for (let [winner, loser] of results){
        graph[winner-1][loser-1] = 1
        graph[loser-1][winner-1] = -1
    }
    for(let k=0;k<n;k++){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if (graph[i][k] === 1 && graph[k][j] === 1){
                    if (graph[i][j] === 0) {
                        graph[i][j] = 1;
                        graph[j][i] = -1;
                    }
                }
            }
        }
    }
    return graph.map((arr)=>arr.filter((v)=>v!==0).length).filter((v)=>v===n-1).length
    
}