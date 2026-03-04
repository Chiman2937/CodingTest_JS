/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length;
    // 초기화
    let jump = new Array(n).fill(Infinity);
    jump[0] = 0;
    
    for(let i = 0; i< n; i++){
        for(let j = 1; j <= nums[i]; j++){
            jump[i+j] = Math.min(jump[i] + 1, jump[i+j])
            if (i+j === n-1) return jump[i+j];
        }
    }
    return 0
};