function solution(numbers) {
    const arr = numbers.split('')
    function permute(arr){
        const result = [];
        if(arr.length === 0) return [[]]
        
        for(let i=0;i<arr.length;i++){
            const first = arr[i]
            const rest = [...arr.slice(0,i),...arr.slice(i+1)]
            const restPerms = permute(rest);
            for(const perm of restPerms){
                const a = [first,...perm].join('')
                const b = ["",...perm].join('')
                result.push(a)
                if(b) result.push(b)
            }
        }
        return result;
    }
    return [...new Set(permute(arr).map((v)=>(Number(v))))].reduce((a,c)=>isPrime(c) ? a+1 : a,0)
} 

function isPrime (n){
    if(n<=1) return false;
    if(n===2) return true;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n % i === 0) return false;
    }
    return true;
}