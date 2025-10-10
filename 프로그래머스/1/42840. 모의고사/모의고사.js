function solution(answers) {
    const l1 = [1,2,3,4,5]
    const l2 = [2,1,2,3,2,4,2,5]
    const l3 = [3,3,1,1,2,2,4,4,5,5]
    let r1=0, r2=0, r3=0;
    for(let i=0;i<answers.length;i++){
        if(answers[i] === l1[i%l1.length]) r1++
        if(answers[i] === l2[i%l2.length]) r2++
        if(answers[i] === l3[i%l3.length]) r3++
    }
    const max = Math.max(r1,r2,r3)
    return [r1,r2,r3].map((v,i)=>max===v ? i+1:0).filter((v)=>v>0)
}