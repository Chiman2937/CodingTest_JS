function solution(m, n, board) {
    let trans=new Array(n).fill('').map((v)=>new Array(m).fill(''))
    for(let col=0;col<n;col++){
        for(let row=0;row<m;row++){
            trans[col][row] = (board[row][col])
        }
    }
    trans = trans.map((v)=>v.reverse());
    //
    while(true){
        let match_list = []
        for(let col=0;col<m-1;col++){
            for(let row=0;row<n-1;row++){
                if(!!trans[row][col] &&
                  trans[row][col] === trans[row+1][col] &&
                  trans[row][col] === trans[row][col+1] &&
                  trans[row][col] === trans[row+1][col+1]){
                    match_list.push([row,col])
                }
            }
        }
        if(match_list.length === 0) break;
        match_list.forEach(([row,col])=>{
            trans[row][col] = ''
            trans[row+1][col] = ''
            trans[row][col+1] = ''
            trans[row+1][col+1] = ''
        })
        trans = trans.map((arr)=>{
            let next = arr.filter((v)=>!!v)
            while(next.length<m){
                next.push('')
            }
            return next;
        })
    }
    return trans.reduce((a,c)=>a+c.filter((v)=>v==="").length,0);
}