function solution(n, words) {
    const visitors = new Set();
    visitors.add(words[0]);
    for(let i = 1; i<words.length; i++){
        const prevWord = words[i-1];
        const word = words[i];
        if(prevWord[prevWord.length-1] !== word[0] || visitors.has(word)) {
            return [(i % n)+1,~~(i / n)+1];
        }
        visitors.add(word);
    }
    return [0,0]
}