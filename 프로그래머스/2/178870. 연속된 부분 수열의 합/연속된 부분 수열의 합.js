function solution(sequence, k) {
    let result = [0,Infinity];
    let i = -1;
    let j = 0;
    let l = sequence.length;
    let sum = 0;
    while(i < l) {
        if(sum <= k) {
            sum+=sequence[i+1];
            i++;
        } else {
            sum-=sequence[j];
            j++;
        }
        if (sum === k && i-j < result[1] - result[0]) {
            result[0] = j;
            result[1] = i;
        }
    }
    return result;
}