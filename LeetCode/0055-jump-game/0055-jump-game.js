/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // // DP 방식
    // const n = nums.length;
    // let jumps = new Array(n).fill(false);
    // jumps[0] = true;

    // for(let i = 0; i < n;i++){
    //     for(let j = 1; j <= nums[i] ; j++) {
    //         if(i+j >= n) continue
    //         if(jumps[i]) jumps[i+j] = true
    //     }
    // }
    // return jumps[n-1]

    // Greedy 방식
    const n = nums.length;
    let farthest = 0;
    for(let i = 0; i < n-1; i++){
        farthest = Math.max(farthest, i + nums[i]);
        if(farthest === i && nums[i] === 0) return false
    }
    return true;
};