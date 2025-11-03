function solution(s) {
    return s.split(' ').map((v)=>v.substring(0,1).toUpperCase()+v.substring(1).toLowerCase()).join(' ')
}