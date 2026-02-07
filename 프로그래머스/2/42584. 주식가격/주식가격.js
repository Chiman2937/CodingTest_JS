function solution(prices) {
    let result = [];
    for(let i = 0; i< prices.length;i++){
        let j = i;
        while(true){
            if(prices[i] > prices[j]) break;
            if(j >= prices.length - 1) break;
            j++;
        }
        result.push(j-i);
    }
    return result;
}