/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // leading space 삭제
    while(s[0]===" "){
        s = s.substring(1);
    }
    let str = '';
    if(s[0] === '-' || s[0] === '+') {
        str+=s[0] + "0";
        s = s.substring(1);
    }
    for(let i = 0; i<s.length;i++){
        if(s[i] === ' ') break;
        if(!(Number(s[i]) >= 0 && Number(s[i]) <= 9)) break;
        str+=s[i];
    }
    const answer = Number(str)
    const min = Math.pow(-2,31);
    const max = Math.pow(2,31) - 1;
    if(answer < min) return min;
    if(answer > max) return max;
    return answer;
};