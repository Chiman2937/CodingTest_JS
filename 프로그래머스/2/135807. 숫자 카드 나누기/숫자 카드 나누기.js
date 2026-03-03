function solution(arrayA, arrayB) {
    arrayA.sort((a,b)=>a-b)
    arrayB.sort((a,b)=>a-b)
    
    let listA = [];
    let listB = [];
    for(let i = 2;i<=arrayA[0];i++){
        if(arrayA.every((v)=>v % i === 0) && arrayB.every((v)=>v % i !== 0)) listA.unshift(i)
    }
    for(let i = 2;i<=arrayB[0];i++){
        if(arrayB.every((v)=>v % i === 0) && arrayA.every((v)=>v % i !== 0)) listB.unshift(i)
    }
    if(listA.length === 0 & listB.length === 0) return 0
    while(listA[0] === listB[0]){
        listA.shift();
        listB.shift();
    }
    return Math.max(listA[0] ?? 0,listB[0] ?? 0)
}