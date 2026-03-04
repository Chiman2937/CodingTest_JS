/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let answer = "";
    function getSubstring (start,end){
        while(start>=0 && end <s.length && s[start] === s[end]) {
            start--;
            end++;
        }
        return s.substring(start+1,end);
    }
    for(let i = 0; i < s.length;i++){
        const odd = getSubstring(i,i);
        const even = getSubstring(i,i+1);
        if(odd.length > answer.length) answer = odd;
        if(even.length > answer.length) answer = even;
    }
    return answer;
};
