const solution = (s) => {
  let result1 = 0; //변환 횟수
  let result2 = 0; //0의 갯수
  while (true) {
    if (s === '1') break;
    const cnt_1 = s.replaceAll('0', '').length;
    const def_0 = s.length - cnt_1;
    s = cnt_1.toString(2);
    result1++;
    result2 += def_0;
  }
  return [result1, result2];
};