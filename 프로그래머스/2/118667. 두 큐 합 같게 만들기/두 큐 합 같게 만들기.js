function solution(queue1, queue2) {
  const target = [...queue1, ...queue2].reduce((a, c) => a + c, 0) / 2;
  const queue = [...queue1, ...queue2, ...queue1, ...queue2];
  let index_q1 = 0;
  let index_q2 = queue2.length;
  let sum_q1 = queue1.reduce((a, c) => a + c, 0);
  let result = 0;
  while (index_q1 < queue.length && index_q2 < queue.length) {
    if (sum_q1 < target) {
      sum_q1 += queue[index_q2];
      index_q2++;
      result++;
    } else if (sum_q1 > target) {
      sum_q1 -= queue[index_q1];
      index_q1++;
      result++;
    } else if (sum_q1 === target) {
      return result;
    }
  }
  return -1;
}