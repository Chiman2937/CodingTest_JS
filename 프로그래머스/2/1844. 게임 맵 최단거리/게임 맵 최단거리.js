function solution(maps) {
    let graph = new Map();
    for(let row=0;row<maps.length;row++){
        for(let col=0;col<maps[row].length;col++){
            const current = getIndex(row,col,maps[row].length)
            if(maps[row][col]===1){
                if(row>0 && maps[row-1][col] === 1)
                    graph.set(current,[...(graph.get(current)||[]),getIndex(row-1,col,maps[row].length)])
                if(col>0 && maps[row][col-1] === 1)
                    graph.set(current,[...(graph.get(current)||[]),getIndex(row,col-1,maps[row].length)])
                if(row<maps.length-1 && maps[row+1][col] === 1)
                    graph.set(current,[...(graph.get(current)||[]),getIndex(row+1,col,maps[row].length)])
                if(col<maps[row].length-1 && maps[row][col+1] === 1)
                    graph.set(current,[...(graph.get(current)||[]),getIndex(row,col+1,maps[row].length)])
            }
        }
    }
    const target = getIndex(maps.length-1,maps[0].length-1,maps[0].length)
    if(!graph.get(target)) return -1
    if(!graph.get(0)) return -1
    let queue = [0];
    let set = new Set([0]);
    let count = 1;
    while(queue.length > 0){
        count++
        let next = [...queue]
        queue = [];
        for(const n of next){
            let array = graph.get(n)
            for(const v of array){
                if(v===target) return count;
                if(!set.has(v)){
                    queue.push(v)
                    set.add(v)
                }
            }    
        }
    }
    return -1
}
const getIndex = (row,col,colLength) => {
    return col+(row*colLength)
}