/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arrs = new Array(numRows).fill(0).map((v)=>[])
    let zigzagMap = [numRows - 1];
    while(zigzagMap[0]>1){
        const currentNumber = zigzagMap[0];
        zigzagMap.push(currentNumber-1);
        zigzagMap.unshift(currentNumber-1);
    }
    zigzagMap.unshift(0);

    const zigzagLength = zigzagMap.length;
    for(let i = 0; i < s.length; i++){
        arrs[zigzagMap[i % zigzagLength]].push(s[i])
    }
    return arrs.flat().join('')
};