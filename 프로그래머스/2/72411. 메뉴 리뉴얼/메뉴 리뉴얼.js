function solution(orders, course) {
    const listMap = new Map();
    const courseMap = new Map();
    let result = [];
    const calc = (index,string,order) => {
        if(index === order.length){
            for(const c of course){
                if(string.length === c){
                    listMap.set(string,(listMap.get(string)||0)+1)
                    if((courseMap.get(c)||0)<listMap.get(string)){
                        courseMap.set(c,listMap.get(string))
                    }
                }
                
            }
            return
        }
        calc(index+1,string,order)
        calc(index+1,string+order[index],order)
    }
    for(const order of orders){
        calc(0,"",order.split('').sort().join(''))    
    }
    for(const list of [...listMap]){
        if(courseMap.get(list[0].length) === list[1] && list[1] > 1) result.push(list[0])
    }
    return result.sort();
    
}