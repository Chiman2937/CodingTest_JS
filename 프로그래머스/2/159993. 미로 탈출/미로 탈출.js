function solution(maps) {
    let pos_start;
    for(let row = 0; row<maps.length; row++){
        for(let col = 0; col<maps[0].length; col++){
            if(maps[row][col] === "S") pos_start = [row,col];
        }
    }
    const [pos_lever,distance_lever] = bfs(pos_start,"L",maps);
    if(!pos_lever) return -1;
    const [pos_exit,distance_exit] = bfs(pos_lever,"E",maps);
    if(!pos_exit) return -1;
    return distance_lever + distance_exit;
}

function bfs(pos_start,target,maps){
    let rowSize = maps.length;
    let colSize = maps[0].length;
    const direction = [[0,1],[1,0],[0,-1],[-1,0]];
    let queue = [[pos_start,0]];
    let visitors = new Set();
    while(queue.length>0){
        let [pos,distance] = queue.shift();
        if(maps[pos[0]][pos[1]] === target) return [pos,distance];
        if(!visitors.has(pos.join(','))) {
            visitors.add(pos.join(','));
            for(const dir of direction){
                const nextRow = pos[0]+dir[0];
                const nextCol = pos[1]+dir[1];
                if(nextRow >= 0 && nextRow < rowSize && nextCol >= 0 && nextCol < colSize){
                    if(maps[nextRow][nextCol] === "X") continue;
                    queue.push([[nextRow,nextCol],distance+1])
                }
            }
        }
    }
    return [null,-1]
}