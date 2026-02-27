function solution(x, y, n) {
    let queue = [[y,0]];
    let visitors = new Set();
    while(queue.length > 0){
        let [value, distance] = queue.shift();
        if(!visitors.has(value)){
			visitors.add(value);
            if(value === x) return distance;
            if(value - n >= x) queue.push([value - n,distance+1]);
            if(value % 2 === 0) queue.push([value / 2,distance+1]);
            if(value % 3 === 0) queue.push([value / 3,distance+1]);
        }
    }
    return -1;
}