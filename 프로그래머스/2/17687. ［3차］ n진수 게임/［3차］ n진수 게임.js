function solution(n, t, m, p) {
    var string = ""
    let i = 0
    while(string.length < t*m){
        string+=i.toString(n).toUpperCase();
        i++;
    }
    return string.split('').filter((v,i)=>i%m===p-1).join('').substring(0,t)
}