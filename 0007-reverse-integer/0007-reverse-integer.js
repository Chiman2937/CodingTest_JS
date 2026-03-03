/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isPositive = x >= 0
    const answer = Number(String(Math.abs(x)).split('').reverse().join('')) * (isPositive ? 1 : -1)
    if(answer < Math.pow(-2,31) || answer > Math.pow(2,31) - 1) return 0
    return answer
};