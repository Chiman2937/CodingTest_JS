function solution(m, n, puddles) {
    let dp = new Array(n).fill(1).map((v)=>new Array(m).fill(1))
    for(const p of puddles){
        const [c,r] = p
        dp[r-1][c-1] = 0
    }
    for(let r=0;r<n;r++){
        for(let c=0;c<m;c++){
            if(r===0 && c===0) continue
            else if(r===0 && dp[r][c]!==0) dp[r][c]=dp[r][c-1]
            else if(c===0 && dp[r][c]!==0) dp[r][c]=dp[r-1][c]
            else if(dp[r][c]!==0) dp[r][c] = (dp[r-1][c]+dp[r][c-1]) % 1000000007
        }
    }
    return dp[n-1][m-1]
}