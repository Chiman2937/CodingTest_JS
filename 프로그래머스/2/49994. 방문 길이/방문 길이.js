function solution(dirs) {
    const dirMap = {
        "L": [-1,0],
        "R": [1,0],
        "U": [0,1],
        "D": [0,-1],
    }
    let cord = "0,0";
    const map = new Map();
    for(const dir of dirs){
        const cordX = Number(cord.split(",")[0]);
        const cordY = Number(cord.split(",")[1]);
        const dirX = dirMap[dir][0];
        const dirY = dirMap[dir][1];
        const destX = cordX + dirX;
        const destY = cordY + dirY;
        // 좌표평면 크기 5 초과 시 스킵
        if(Math.abs(destX) > 5 || Math.abs(destY) > 5) continue;
        const destination = `${destX},${destY}`;
        // cord에서 destination으로 간 적이 있으면 스킵
        if ((map.get(cord) || []).indexOf(destination) > -1) {
            cord = destination;
            continue;
        }
        // destination에서 cord로 간 적이 있으면 스킵
        if ((map.get(destination) || []).indexOf(cord) > -1){
            cord = destination;
            continue;   
        }
        // 통과 시 map 업데이트
        map.set(cord, [...(map.get(cord)||[]),destination]);
        cord = destination;
    }
    return [...map].reduce((a,c)=>a+c[1].length,0);
}