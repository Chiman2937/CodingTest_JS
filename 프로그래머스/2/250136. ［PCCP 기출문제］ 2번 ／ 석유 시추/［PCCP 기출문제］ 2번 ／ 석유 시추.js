function solution(land) {
    const rows = land.length;
    const cols = land[0].length;
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    let visitors = new Array(rows).fill(0).map(()=>new Array(cols).fill(false));
    let result = new Array(cols).fill(0);
    for(let row = 0; row<rows; row++){
        for(let col=0; col<cols; col++){
            if(visitors[row][col] || land[row][col] === 0) continue;
            visitors[row][col] = true;
            let queue = [[row,col]];
            let sum = 0;
            let connect_list = new Set();
            while(queue.length > 0){
                const [r,c] = queue.shift();
                sum+=land[r][c];
                connect_list.add(c);
                for(const [dr,dc] of dirs){
                    const nr = r + dr;
                    const nc = c + dc;
                    if(nr < 0 || nr >= rows) continue;
                    if(nc < 0 || nc >= cols) continue;
                    if(visitors[nr][nc] || land[nr][nc] === 0) continue;
                    visitors[nr][nc] = true;
                    queue.push([nr,nc]);
                }
            }
            for(const c of [...connect_list]){
                result[c]+=sum
            }
        }
    }
    return Math.max(...result)
}