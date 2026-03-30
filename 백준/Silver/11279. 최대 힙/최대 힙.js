const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

class Heap {
  constructor() {
    this.items = [];
  }
  swap(i1, i2) {
    let temp = this.items[i1];
    this.items[i1] = this.items[i2];
    this.items[i2] = temp;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return i * 2 + 1;
  }
  getRightChildIndex(i) {
    return i * 2 + 2;
  }
  getParent(i) {
    return this.items[this.getParentIndex(i)];
  }
  getLeftChild(i) {
    return this.items[this.getLeftChildIndex(i)];
  }
  getRightChild(i) {
    return this.items[this.getRightChildIndex(i)];
  }
}

class MaxHeap extends Heap {
  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }
  pop() {
    if (this.items.length === 0) return 0;
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.length--;
    this.bubbleDown();
    return item;
  }
  bubbleUp() {
    let currentIndex = this.items.length - 1;
    while (
      this.getParent(currentIndex) !== undefined &&
      this.getParent(currentIndex) < this.items[currentIndex]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  bubbleDown() {
    let currentIndex = 0;
    while (this.getLeftChild(currentIndex) !== undefined) {
      let largerChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.getRightChild(currentIndex) !== undefined &&
        this.getRightChild(currentIndex) > this.getLeftChild(currentIndex)
      ) {
        largerChildIndex = this.getRightChildIndex(currentIndex);
      }
      if (this.items[currentIndex] >= this.items[largerChildIndex]) break;
      this.swap(currentIndex, largerChildIndex);
      currentIndex = largerChildIndex;
    }
  }
}

let [n, ...list] = input.map(Number);

function solution(n, list) {
  let result = '';
  let heap = new MaxHeap();
  for (let l of list) {
    if (l === 0) result += heap.pop() + '\n';
    else heap.push(l);
  }
  return result;
}

console.log(solution(n, list));
