function solution(elements) {
    let result = new Set();
    const size = elements.length;
    elements = [...elements,...elements];
    // 순열 길이만큼 순회
    for(let l = 1; l <= size; l++){
        // elements의 길이만큼 순회
        for(let i = 0; i < size; i++){
            let sum = 0;
            for(let index = i; index <i+l ; index++){
                sum+=elements[index];
            }
            result.add(sum);
        }
    }
    return result.size;
}
