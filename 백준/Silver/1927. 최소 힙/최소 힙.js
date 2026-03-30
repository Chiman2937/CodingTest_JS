const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input.map(Number);

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

class MinHeap extends Heap {
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
      this.getParent(currentIndex) > this.items[currentIndex]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  bubbleDown() {
    let currentIndex = 0;
    while (
      (this.getLeftChild(currentIndex) !== undefined &&
        this.items[currentIndex] > this.getLeftChild(currentIndex)) ||
      this.items[currentIndex] > this.getRightChild(currentIndex)
    ) {
      let smallerChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.getRightChildIndex(currentIndex) !== undefined &&
        this.getRightChild(currentIndex) < this.getLeftChild(currentIndex)
      ) {
        smallerChildIndex = this.getRightChildIndex(currentIndex);
      }
      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    }
  }
}

function solution(n, list) {
  let result = '';
  let Heap = new MinHeap();
  for (let l of list) {
    if (l === 0) result += Heap.pop() + '\n';
    else Heap.push(l);
  }
  return result;
}

console.log(solution(n, list));
