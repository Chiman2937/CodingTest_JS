function solution(t, p) {
    let answer = 0;
    for(i=0;i<t.length - p.length + 1 ; i++) {
        if (Number(t.substring(i,p.length+i)) <= Number(p)) answer++;
    }
    return answer;
}