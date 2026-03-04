/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    function dfs(str,open_length, close_length){
        if(open_length - close_length < 0) return;
        if(open_length > n || close_length > n) return;
        if(open_length === n && close_length === n) {
            result.push(str);
            return;
        }
        dfs(str+'(',open_length+1,close_length);
        dfs(str+')',open_length,close_length+1);
    }
    dfs('',0,0);
    return result;
};