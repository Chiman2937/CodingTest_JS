function solution(wallpaper) {
    let r1 = wallpaper.length-1;
    let r2 = 0;
    let c1 = wallpaper[0].length-1;
    let c2 = 0;
    for(let row=0;row<wallpaper.length;row++){
        for (let col=0;col<wallpaper[row].length;col++){
            const str = wallpaper[row][col]
            if(str==="#"){
                r1 = r1 > row ? row : r1
                r2 = r2 < row ? row : r2
                c1 = c1 > col ? col : c1
                c2 = c2 < col ? col : c2
            }
        }
    }
    return ([r1,c1,r2+1,c2+1])
}