function solution(number, k) {
    let l = number.length - k;
    let stack = [];
    for(let i = 0; i<number.length; i++){
        while(stack.length > 0 && stack[stack.length-1] < number[i] && stack.length + number.length - i > l){
            stack.pop();
        }
		if(stack.length < l) stack.push(number[i]);
    }
    return stack.join('');
    // 최초 접근법
    // 문자열의 길이는 number의길이 - k만큼 되어야 하므로
    // startIndex ~ lastIndex 까지 순회를 하는데
    // startIndex는 선택한 문자열 + 1 번째 부터
    // lastIndex는 result에 담긴 k - result에 담긴 문자열길이만큼 순회
    // for문을 두번 사용해 시간복잡도가 O(n^2)이 되므로 실패
    
    // const l = number.length;
    // let startIndex = 0;
    // let result = "";
    // for(let i = k; i< l; i++){
    //     let maxIndex = startIndex;
    //     let maxNumber = 0;
    //     for(let j = startIndex; j<=i;j++){
    //         if(number[j] > maxNumber) {
    //             maxIndex = j;
    //             maxNumber = number[j];
    //         }
    //     }
    //     result+=number[maxIndex];
    //     startIndex = maxIndex+1;
    // }
    // return result;
}

console.log(solution("10",1))