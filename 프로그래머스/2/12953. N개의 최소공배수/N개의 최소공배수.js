function solution(arr) {
    arr.sort((a,b)=>a-b);
    
    while(arr.length > 1){
        let a = arr.shift();
        let b = arr.shift();
        arr.push((a*b) / GCD(a,b))
    }
    
    return arr[0];
}

function GCD(a,b){
    while(a%b>0){
        let r = a%b;
        a = b;
        b = r;
    }
    return b;
}