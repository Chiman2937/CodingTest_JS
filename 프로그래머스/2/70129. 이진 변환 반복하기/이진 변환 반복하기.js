function solution(s) {
    let cnt_trans = 0;
    let cnt_zero = 0;
    
    while(s!=='1'){
        const n = s.length
        s = s.replaceAll('0','')    
        const m = s.length
        s = m.toString(2);
        cnt_trans++
        cnt_zero+=n-m
    }
    return [cnt_trans,cnt_zero]

}