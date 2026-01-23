function solution(n) {
    const directionMap = [[1,0],[0,1],[-1,-1]];
    // 진행방향 설정
    let directionIndex = 0;
    let arr = new Array(n).fill(0).map((v,i)=>new Array(i+1).fill(0));
    // 현재 위치
    let currentRow = -1;
    let currentCol = 0;
    // 현재 숫자
    let count = 1;
    while(n>0){
        // 진행 방향 설정
        const direction = directionMap[directionIndex];
        const dirRow = direction[0];
        const dirCol = direction[1];
        for(let i = 0; i < n ; i++){
            currentRow+=dirRow;
            currentCol+=dirCol;
            arr[currentRow][currentCol] = count;
            count++;
        }
        
        // 진행 방향 수정
        directionIndex = (directionIndex + 1) % 3;
        // 진행 횟수 수정
        n--;
    }
    return arr.flat();
}