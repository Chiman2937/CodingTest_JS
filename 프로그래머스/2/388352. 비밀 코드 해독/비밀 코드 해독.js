function solution(n, q, ans) {
    const firstArray = q.shift();
    const firstAnswerCount = ans.shift();
    // 첫번째 배열의 숫자들을 제외한 배열 생성
    let remainArray = [];
    Array.from({length:n}).forEach((_,i)=>{
        if(firstArray.indexOf(i+1) === -1){
            remainArray.push(i+1)
        }
    })
    
    const arr1 = getCombiList(firstArray,firstAnswerCount);
    const arr2 = getCombiList(remainArray, 5 - firstAnswerCount);
    let enableList = getCombiArray(arr1,arr2);
    
    // 두번째 배열부터 순회하며 정답 개수 일치하는지 검증
    // 정답 개수 일치하지 않으면 배열 삭제
    for(let i = 0; i < q.length; i++){
        const numbers = q[i];
        const answerCount = ans[i];
				// console.log(numbers,answerCount)
        for(let j = enableList.length - 1; j >= 0; j--){
            let count = 0;
            for(const number of numbers){
                if (enableList[j].indexOf(number) > -1) count++;
            }
            if(count !== answerCount){
                enableList.splice(j, 1);  // 뒤에서부터 삭제하면 인덱스 안 꼬임
            }
        }
    }    
    return enableList.length;
}

function getCombiList (arr,n){
    let result = [];
    function combi(list,index){
        if(list.length === n){
            result.push(list);
            return;
        }
        for(let i = index;i < arr.length;i++){
            combi([...list,arr[i]],i+1);
        }
    }
    combi([],0)
    return result;
}

function getCombiArray(arr1,arr2){
    let result = [];
    for(const a1 of arr1){
        for(const a2 of arr2){
            result.push([...a1,...a2])
        }
    }
    return result;
}