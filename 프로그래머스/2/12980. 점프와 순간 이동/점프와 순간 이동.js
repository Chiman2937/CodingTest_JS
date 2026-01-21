function solution(n)
{
    let result = 0;
    while(n>1){
        if(n % 2 === 1){
            result++;
            n-=1;
        }
        n = n / 2;
    }
    return result+1;
}