function solution(n, computers) {
    let graph = new Map();
    for(let i = 0; i< computers.length; i++){
        graph.set(i,[])
        for(let j = 0; j < computers[i].length ; j++){
            if(i===j) continue
            if(computers[i][j] === 1) graph.get(i).push(j)
        }
    }
    let visitors = new Set();
    let queue = [];
    let count = 0;
    for(let i = 0; i< computers.length; i++){
        queue.push(i);
        if(!visitors.has(i)) count++;
        while(queue.length > 0){
            let key = queue.shift();
            if(visitors.has(key)) continue
            visitors.add(key);
            let members = graph.get(key);
            for(const m of members){
                queue.push(m);
            }
        }
    }
    return count;
}