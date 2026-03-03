/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const row_size = board.length;
    const col_size = board[0].length;
    // 탐색 시작 position 목록
    let start_list = [];
    for(let row = 0; row < row_size ; row++){
        for(let col = 0; col < col_size ; col++) {
            if(board[row][col] === word[0]) start_list.push([row,col])
        }
    }
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    let answer = false;

    let visitors = new Set();;
    function dfs(pos, index){
        if(index === word.length) answer = true;
        for (const d of directions) {
            const nextRow = pos[0] + d[0];
            const nextCol = pos[1] + d[1];
            if(nextRow < 0 || nextRow >= row_size || nextCol < 0 || nextCol >= col_size) continue;
            if(visitors.has(`${nextRow},${nextCol}`)) continue;
            if(board[nextRow][nextCol] === word[index]) {
                visitors.add(`${nextRow},${nextCol}`);
                dfs([nextRow,nextCol],index+1)
                visitors.delete(`${nextRow},${nextCol}`);
            }
        }
    }
    for(const start_pos of start_list){
        visitors.add(`${start_pos[0]},${start_pos[1]}`);
        dfs(start_pos,1);
        visitors.delete(`${start_pos[0]},${start_pos[1]}`);
    }
    return answer;
};

// A B C E
// S F E S
// A D E E