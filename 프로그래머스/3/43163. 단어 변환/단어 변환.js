function solution(begin, target, words) {
    let graph = new Map();
    const length = begin.length;
    for(const word of [begin,...words]){
        for(let i=0;i<length;i++){
            const nextKey = word.substring(0,i) + "-" + word.substring(i+1)
            graph.set(nextKey,[...graph.get(nextKey)||[],word])
        }
    }
    let queue = [[0,begin]];
    let visitor = new Set([begin]);
    while(queue.length > 0){
        // console.log(queue)
        let [distance,key] = queue.shift();
        for(let i=0;i<length;i++){
            const nextKey = key.substring(0,i) + "-" + key.substring(i+1)
            for(const item of graph.get(nextKey)){
                if(item === target) return distance+1
                if(!visitor.has(item)){
                    queue.push([distance+1,item])
                    visitor.add(item)
                }
            }
        }
    }
    return 0
}