function solution(topping) {
    let result = 0;
    const map_a = new Map();
    const map_b = new Map();
    for(const t of topping){
        map_b.set(t,(map_b.get(t)||0)+1);
    }
    for(let i = 0; i<topping.length;i++){
        const t = topping[i];
        map_a.set(t,(map_a.get(t)||0)+1);
        if(map_b.get(t) === 1) {
            map_b.delete(t);
        } else {
            map_b.set(t,(map_b.get(t)||0)-1)
        }
        // console.log("a: " + [...map_a] + ", b: " + [...map_b] + ", a size: " + map_a.size + ", b size: " + map_b.size)
        if(map_a.size === map_b.size) result++;
    }
    return result;
}