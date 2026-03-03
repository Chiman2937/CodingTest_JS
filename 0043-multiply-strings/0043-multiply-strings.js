/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const m = num1.length;
    const n = num2.length;
    let result = new Array(m+n).fill(0);
    for(let i = m - 1; i>=0;i--){
        for(let j = n - 1; j>=0;j--){
            let v = (num1[i] * num2[j]) + result[i+j+1];
            result[i+j] += ~~(v / 10);
            result[i+j+1] = v % 10;
        }
    }
    while(result[0]===0) result.shift();
    const answer = result.join('')
    return answer === '' ? '0' : answer;
};