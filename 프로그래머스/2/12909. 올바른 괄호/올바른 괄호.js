const solution = (s) => {
    let stack = 0;
    for(i=0;i<s.length;i++) {
        if (s[i] === '(') stack++;
        else if (s[i] === ')') stack--;
        if(stack < 0) return false;
    }
    if (stack !== 0) return false;
    return true;
};