function solution(m, n, startX, startY, balls) {
    let result = new Array(balls.length).fill(Infinity);
    for(let i = 0;i<balls.length;i++){
        const target = balls[i]
        let target_list = [
            [target[0],-target[1]],
            [-target[0],target[1]],
            [-target[0],-target[1]],
            [-target[0],n+n-target[1]],
            [m+m-target[0],target[1]],
            [target[0],n+n-target[1]],
            [m+m-target[0],n+n-target[1]],
            [m+m-target[0],-target[1]],
        ]
        for(const [tX,tY] of target_list){
            if(tY === startY) {
                if (startX < tX && startX < target[0]) continue;
                if (startX > tX && startX > target[0]) continue;
            } else if (tX === startX) {
                if (startY < tY && startY < target[1]) continue;
                if (startY > tY && startY > target[1]) continue;
            }
            let distance = (tX - startX)**2 + (tY - startY)**2
            if(result[i] > distance) result[i] = distance;
        }
    }
    return result
}