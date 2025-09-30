function solution(survey, choices) {
    const hash = new Map([["RT",0],["CF",0],["JM",0],["AN",0]])
    let answer="";
    for(const i in survey){
        choices[i] = choices[i] - 4
        let key = survey[i]
        let value = choices[i];
        if(survey[i][0] > survey[i][1]) {
            key =  survey[i][1] + survey[i][0];
            value = -choices[i]
        }
        hash.set(key,hash.get(key)+value)
    }
    for (let [key,value] of hash){
        answer = value>0 ? answer+key[1] : answer+key[0]
    }
    return answer;
}