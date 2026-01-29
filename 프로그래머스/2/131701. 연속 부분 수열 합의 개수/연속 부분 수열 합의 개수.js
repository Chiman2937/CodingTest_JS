function solution(elements) {
    let result = new Set();
    const size = elements.length;
    elements = [...elements,...elements];
    for(let i = 0; i< size; i++){
        let sum = 0;
        for(let l =0; l< size;l++){
            sum+=elements[i+l];
            result.add(sum);
        }
    }
    return result.size;
}
