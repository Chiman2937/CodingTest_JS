function solution(record) {
    const nickList = new Map();
    let answer = [];
    for(const r of record){
        const [type, id, nickname] = r.split(' ');
        if(type!=="Leave") nickList.set(id, nickname)
    }
    const messageMap = {
        Enter: "들어왔습니다.",
        Leave: "나갔습니다.",
    }
    for(const r of record){
        const [type, id, nickname] = r.split(' ');
        if(type!=="Change"){
            answer.push(`${nickList.get(id)}님이 ${messageMap[type]}`)
        }
    }
    return answer;
}