function solution(triangle) {
    const maxRow = triangle.length-1
    let maxValue = 0;
    for(let r=1;r<=maxRow;r++){
        const n = triangle[r].length
        for(let c=0;c<n;c++){
            if(c===0) triangle[r][c] += triangle[r-1][c]
            else if(c===n-1) triangle[r][c] += triangle[r-1][c-1]
            else triangle[r][c] += Math.max(triangle[r-1][c],triangle[r-1][c-1])
            if(r===maxRow) maxValue = Math.max(maxValue,triangle[r][c])
        }
    }
    return maxValue
}