function solution(n, arr1, arr2) {
    let answer = [];
    for(i=0;i<n;i++){
        const bin = (arr1[i] | arr2[i]).toString(2);
        const next = bin.replaceAll("1","#").replaceAll("0"," ").padStart(n," ");
        answer.push(next);
    }
    return answer;
}