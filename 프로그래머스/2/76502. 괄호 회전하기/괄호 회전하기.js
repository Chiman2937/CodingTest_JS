function solution(s) {
    let result = 0;
    for(let i = 0; i<s.length;i++){
        result += calc(s);
        s = s.substring(1) + s[0];
    }
    return result;
}

function calc(s) {
    let stack = [];
    for(let i = 0; i< s.length; i++){
        if(s[i] === "[" || s[i] === "(" || s[i] === "{"){
            stack.push(s[i]);
            continue;
        } 
        const lastItem = stack.pop();
        if(s[i] === "]" && lastItem !== "[") return 0;
        if(s[i] === ")" && lastItem !== "(") return 0;
        if(s[i] === "}" && lastItem !== "{") return 0;
    }
    if(stack.length > 0) return 0;
    return 1;
}