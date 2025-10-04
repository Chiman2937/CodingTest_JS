function solution(s) {
    let answer=s.length;
    for(let l = 1; l <= ~~(s.length/2);l++){
        let arr = [];
        for(let i=0;i<s.length;i+=l){
            if(arr.length === 0 || arr[arr.length-1][1] !== s.substring(i,l+i)) arr.push(["",s.substring(i,l+i)])
            else arr[arr.length-1][0] = arr[arr.length-1][0] === "" ? 2 : arr[arr.length-1][0]+1
        }
        const length = arr.flat().join('').length
        answer = answer > length ? length : answer
        
    }
    return answer
}