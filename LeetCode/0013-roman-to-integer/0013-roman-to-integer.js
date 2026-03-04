/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanList = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let answer = 0;
    for(let i = 0; i<s.length-1; i++){
        if(romanList[s[i]] >= romanList[s[i+1]]) answer+=romanList[s[i]];
        if(romanList[s[i]] < romanList[s[i+1]]) answer-=romanList[s[i]];
    }
    answer+=romanList[s[s.length-1]];
    return answer;
};