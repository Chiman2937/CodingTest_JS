function solution(board)
{
    const rows = board.length;
    const cols = board[0].length;
    let maxValue = Math.max(0,Math.max(...board[0]),Math.max(...board.map((row)=>row[0])))

    for(let row = 1;row<rows;row++){
        for(let col = 1; col < cols; col++){
            if(board[row][col] > 0){
                board[row][col] = Math.min(board[row-1][col],board[row-1][col-1],board[row][col-1]) + 1;
            }
            maxValue = Math.max(maxValue, board[row][col]);
        }
    }
    return maxValue*maxValue;
}