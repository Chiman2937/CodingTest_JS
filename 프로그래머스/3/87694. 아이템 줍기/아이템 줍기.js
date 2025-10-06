function solution(rectangle, characterX, characterY, itemX, itemY) {
    let dotMap = new Map();
    for(const item of rectangle){
        const [x1,y1,x2,y2] = item
        for(let x=x1;x<=x2;x++){
            if(isOnOutline(rectangle,x-0.9,y1) && x>x1)
                dotMap.set(`${x},${y1}`,[...dotMap.get(`${x},${y1}`)||[],`${x-1},${y1}`])
            if(isOnOutline(rectangle,x-0.9,y2) && x>x1)
                dotMap.set(`${x},${y2}`,[...dotMap.get(`${x},${y2}`)||[],`${x-1},${y2}`])
            if(isOnOutline(rectangle,x+0.9,y1) && x<x2)
                dotMap.set(`${x},${y1}`,[...dotMap.get(`${x},${y1}`)||[],`${x+1},${y1}`])
            if(isOnOutline(rectangle,x+0.9,y2) && x<x2)
                dotMap.set(`${x},${y2}`,[...dotMap.get(`${x},${y2}`)||[],`${x+1},${y2}`])
        }
        for(let y=y1;y<=y2;y++){
            if(isOnOutline(rectangle,x1,y-0.9) && y>y1)
                dotMap.set(`${x1},${y}`,[...dotMap.get(`${x1},${y}`)||[],`${x1},${y-1}`])
            if(isOnOutline(rectangle,x2,y-0.9) && y>y1)
                dotMap.set(`${x2},${y}`,[...dotMap.get(`${x2},${y}`)||[],`${x2},${y-1}`])
            if(isOnOutline(rectangle,x1,y+0.9) && y<y2)
                dotMap.set(`${x1},${y}`,[...dotMap.get(`${x1},${y}`)||[],`${x1},${y+1}`])
            if(isOnOutline(rectangle,x2,y+0.9) && y<y2)
                dotMap.set(`${x2},${y}`,[...dotMap.get(`${x2},${y}`)||[],`${x2},${y+1}`])
        }
    }
    let queue = [[0,`${characterX},${characterY}`]]
    let visitor = new Set([`${characterX},${characterY}`])
    while(queue.length > 0){
        // console.log(queue)
        let [distance,key] = queue.shift()
        for(const item of dotMap.get(key)){
            if(item === `${itemX},${itemY}`) return distance+1
            if(!visitor.has(item)){
                queue.push([distance+1,item])
                visitor.add(item)
            }
        }
    }
}

function isOnOutline(rectangle,x,y) {
    for(const item of rectangle){
        const [x1,y1,x2,y2] = item
        if(x>x1 && x<x2 && y>y1 && y<y2) return false;    
    }
    return true;
}