function solution(n, edge) {
    let list = new Map()
    for(const [key,value] of edge){
        list.set(key,[...list.get(key)||[],value])
        list.set(value,[...list.get(value)||[],key])
    }
    let queue = [[1,0]]
    let visitors = new Set([1])
    let maxDepth = 0;
    let count = 0;
    while(queue.length > 0){
        const [key,depth] = queue.shift()
        for(const n of list.get(key)||[]){
            if(!visitors.has(n)){
                queue.push([n,depth+1])
                visitors.add(n)
            }
        }
        if(maxDepth < depth){
            maxDepth = depth
            count=0
        }
        count++
    }
    return count
}