function solution(arr1, arr2) {
    const l = arr2.length;
    const result = new Array(arr1.length).fill(0).map((v)=>new Array(arr2[0].length).fill(0))
    for(let row = 0; row < result.length; row++){
        for(let col = 0; col < result[0].length; col++){
            for(let i = 0; i < l; i++){
                result[row][col]+=arr1[row][i]*arr2[i][col]
            }
        }
    }
    return result;
}