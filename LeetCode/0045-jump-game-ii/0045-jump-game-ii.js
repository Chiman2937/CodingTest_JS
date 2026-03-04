/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // DP 방식, O(N^2)
    // const n = nums.length;
    // // 초기화
    // let jump = new Array(n).fill(Infinity);
    // jump[0] = 0;
    
    // for(let i = 0; i< n; i++){
    //     for(let j = 1; j <= nums[i]; j++){
    //         jump[i+j] = Math.min(jump[i] + 1, jump[i+j])
    //         if (i+j === n-1) return jump[i+j];
    //     }
    // }
    // return 0

    // Greedy 방식, O(N)
    let jumps = 0;
    let end = 0;
    let farthest = 0;
    for(let i = 0; i < nums.length - 1; i++){
        farthest = Math.max(farthest,i+nums[i]);
        if(i === end){
            end = farthest;
            jumps++;
        }
    }
    return jumps;
};