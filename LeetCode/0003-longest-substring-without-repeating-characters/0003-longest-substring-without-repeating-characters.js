/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let str = "";
    let answer = 0;
    for(let i = 0; i<s.length; i++){
        if(str.indexOf(s[i]) === -1){
            str+=s[i];
            answer = Math.max(answer,str.length)
        } else {
            str = str.substring(1);
            i--;
        }
    }
    return answer;
};