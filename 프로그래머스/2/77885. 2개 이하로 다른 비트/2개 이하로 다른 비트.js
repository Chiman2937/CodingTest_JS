function solution(numbers) {
    let result = [];
    // 숫자를 2진수를 변환해서 모든 자리수 탐색(끝자리부터)
    for(const number of numbers){
        let binary = "0" + number.toString(2);
        for(let i = binary.length -1 ; i > 0 ; i--){
            // 현재 자리가 0 이면 1로 변경
            if(binary[i] === "0"){
                binary = binary.substring(0,i) + "1" + binary.substring(i+1);
                break;
            }
            // 현재 자리가 1이고 다음자리가 0이면 서로 자리 변경
            else if(binary[i] === "1" && binary[i-1] === "0"){
                binary = binary.substring(0,i-1) + "10" + binary.substring(i+1);
                break;
            }
            // 현재 자리가 1이고 다음 자리도 1이면 continue
            else {
                continue;
            }
        }
        result.push(parseInt(binary,2))
    }
    
    return result;
}