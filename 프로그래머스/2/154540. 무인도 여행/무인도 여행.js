function solution(maps) {
    let direction = [[0,1],[1,0],[0,-1],[-1,0]];
    let visitors = new Set();
    let answer = [];
    for(let row = 0; row < maps.length; row++){
        for(let col = 0; col < maps[0].length; col++){
            // 순회 시작
            if(visitors.has(`${row},${col}`)) continue
            if(maps[row][col] === "X") continue;
            let queue = [`${row},${col}`];
            let sum = 0;
            console.log(`탐색 시작: ${row},${col}`)
            while(queue.length > 0){
                const key = queue.shift();
                if(visitors.has(key)) continue;
                visitors.add(key);
                const [startRow, startCol] = key.split(',').map((v)=>Number(v));
                sum+=Number(maps[startRow][startCol]);
                for(const [r,c] of direction){
                    if(startRow+r >= maps.length || startRow+r < 0) continue;
                    if(startCol+c >= maps[0].length || startCol+c < 0) continue;
                    if(maps[startRow+r][startCol+c] === "X") continue;
                    if(visitors.has(`${startRow+r},${startCol+c}`)) continue;
                    queue.push(`${startRow+r},${startCol+c}`)
                }
            }
            answer.push(sum);
        }
    }
    answer.sort((a,b)=>a-b)
    return answer.length === 0 ? [-1] : answer
}