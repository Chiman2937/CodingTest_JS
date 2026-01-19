function solution(s)
{
    let stack = [];
    for(const str of s){
        if(str === stack[stack.length - 1]) {
            stack.pop();
            continue;
        }
        stack.push(str);
        while(stack.length >= 2){
            const l = stack.length;
            if(stack[l-1] === stack[l-2]) {
                stack.length = l - 2;
            } else {
                break;
            }
        }
    }
    if (stack.length > 0) return 0;
    return 1;
}