function solution(players, m, k) {
    let index = 0;
    let add = [[0,0]]; // 증설 서버 수 배열 [size, count]
	let result = 0;
    for(const p of players){
        if(add.length > 0 && add[0][1] === 0) add.shift();
        const addSize = add.reduce((a,c)=>a+c[0],0);
        if(~~(p/m) > addSize) {
            add.push([~~(p / m) - addSize,k]);
						result+= ~~(p / m) - addSize
        }
        index++;            
        add.forEach((v)=> v[1]-=1);
    }
    return result;
}