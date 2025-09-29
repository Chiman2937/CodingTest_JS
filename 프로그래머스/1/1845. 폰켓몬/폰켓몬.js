function solution(nums) {
    const kind = new Set(nums).size;
    const select = nums.length / 2
    return kind >= select ? select : kind;
}