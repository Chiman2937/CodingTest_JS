function solution(word) {
    let result = 0;
    const list = {'A':0,'E':1,'I':2,'O':3,'U':4};
    const calc = [781,156,31,6,1];
    for(let i = 0;i<word.length;i++){
        result+=(list[word[i]]*calc[i])+1
    }
    return result;
}
