function solution(msg) {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const answer = [];
    const lib = str.split('');
    while(msg){
        for(let j=lib.length-1;j>=0;j--){
            if(msg.indexOf(lib[j])===0){
                answer.push(j+1)
                lib.push(msg.substring(0,lib[j].length+1))
                msg = msg.substring(lib[j].length)
                break;
            }
        }
    }
    return answer;
}