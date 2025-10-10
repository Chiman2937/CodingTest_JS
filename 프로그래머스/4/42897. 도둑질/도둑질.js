function solution(money) {
    const n = money.length - 1
    const dp1 = money.slice(0,n)
    const dp2 = money.slice(1)
    
    dp1[1] = Math.max(dp1[0],dp1[1])
    for(let i=2;i<n;i++){
        dp1[i] = Math.max(dp1[i]+dp1[i-2],dp1[i-1])
    }
    dp2[1] = Math.max(dp2[0],dp2[1])
    for(let i=2;i<n;i++){
        dp2[i] = Math.max(dp2[i]+dp2[i-2],dp2[i-1])
    }
    return Math.max(dp2[n-1],dp1[n-1])
}