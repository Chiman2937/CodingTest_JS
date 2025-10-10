function solution(n, wires) {
    let minDiff = n;
    for(let i=0;i<wires.length;i++){
        const nextWires = [...wires.slice(0,i),...wires.slice(i+1)]
        const graph = getGraph(nextWires)
        let queue = [nextWires[0][0]]
        let visitors = new Set([nextWires[0][0]])
        let maxDepth = 0
        while(queue.length > 0){
            const key = queue.shift()
            const values = graph.get(key)||[]
            for(const v of values){
                if(!visitors.has(v)){
                    queue.push(v)
                    visitors.add(v)
                }
            }
        }
        // console.log([...visitors])
        minDiff = Math.min(Math.abs(visitors.size - (n-visitors.size)),minDiff)
    }
    return minDiff
}

function getGraph(wires){
    const graph = new Map()
    for(let i=0;i<wires.length;i++){
        const [key,value] = wires[i]
        graph.set(key,[...graph.get(key)||[],value])
        graph.set(value,[...graph.get(value)||[],key])
    }
    return graph
}