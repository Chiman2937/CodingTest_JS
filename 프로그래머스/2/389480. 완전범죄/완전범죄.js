function solution(info, n, m) {
    // m 크기 만큼의 배열 생성
    let dp = new Array(m).fill(Infinity);
    // 값 초기화
    dp[0] = 0;
    for(const [a_trace, b_trace] of info){
        let next_dp = new Array(m).fill(Infinity);
        for(let b_sum = 0; b_sum < m ; b_sum++){
            // 현재 위치가 Infinity인 경우 pass
            if(dp[b_sum] === Infinity) continue;
            
            // a가 훔칠 경우 infinity가 아닌 index에 a만큼 더해줌
            // a만큼 더한 값이 n보다 크거나 같으면 infinity 처리
            // 이 때 기존에 저장된 값과 비교하여 최솟값이 들어가야함
            if(dp[b_sum] + a_trace < n){
                next_dp[b_sum] = Math.min(dp[b_sum] + a_trace, next_dp[b_sum]);
            }
            
            // b가 훔칠 경우 infinity가 아닌 index에서 index+b_trace 위치로 값 복사
            // index+b_trace가 m 보다 클 경우 무시
            // 이 때 기존에 저장된 값과 비교하여 최솟값이 들어가야함
            if(b_sum + b_trace < m) {
                next_dp[b_sum + b_trace] = Math.min(dp[b_sum], next_dp[b_sum + b_trace])
            }
        }
        
        dp = next_dp;
    }
    const minValue = Math.min(...dp);
    if(minValue === Infinity) return -1;
    return minValue;
}