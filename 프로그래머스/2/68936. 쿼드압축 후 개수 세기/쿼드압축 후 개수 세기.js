function solution(arr) {
    arr = arr.flat();
    let result = [0,0];
    function recursion(nextArr){
        if(nextArr.every((v)=>v===0)){
            result[0]++;
            return;
        }
        if(nextArr.every((v)=>v===1)){
            result[1]++;
            return;
        }
		nextArr = sliceArray(nextArr);
        for(const item of nextArr){	
            recursion(item);
        }
    }
    recursion(arr);
    return result;
	return sliceArray(arr);
}

function sliceArray(arr) {
    let nextArray = [[],[],[],[]];
    arr.forEach((v,i)=>{
	    const colIndex = ~~(i / (Math.sqrt(arr.length) / 2)) % 2;
        const rowIndex = ~~(i / (arr.length / 2));
        const nextIndex = colIndex + rowIndex*2;
        nextArray[nextIndex].push(v);
    })
    return nextArray;
}