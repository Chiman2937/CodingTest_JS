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

class AbsHeap extends Heap {
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
    while (this.getParent(currentIndex) !== undefined) {
      let parrent = this.getParent(currentIndex);
      let current = this.items[currentIndex];
      if (
        Math.abs(parrent) > Math.abs(current) ||
        (Math.abs(parrent) === Math.abs(current) && parrent > current)
      ) {
        this.swap(currentIndex, this.getParentIndex(currentIndex));
        currentIndex = this.getParentIndex(currentIndex);
      } else break;
    }
  }
  bubbleDown() {
    let currentIndex = 0;
    while (this.getLeftChild(currentIndex) !== undefined) {
      let current = this.items[currentIndex];
      let leftChild = this.getLeftChild(currentIndex);
      let rightChild = this.getRightChild(currentIndex);
      let smallerChildIndex = this.getLeftChildIndex(currentIndex);
      if (this.getRightChild !== undefined) {
        if (
          Math.abs(leftChild) > Math.abs(rightChild) ||
          (Math.abs(leftChild) === Math.abs(rightChild) &&
            leftChild > rightChild)
        ) {
          smallerChildIndex = this.getRightChildIndex(currentIndex);
        }
      }
      let child = this.items[smallerChildIndex];
      if (
        Math.abs(current) > Math.abs(child) ||
        (Math.abs(current) === Math.abs(child) && current > child)
      ) {
        this.swap(currentIndex, smallerChildIndex);
        currentIndex = smallerChildIndex;
      } else break;
    }
  }
}

let [n, ...list] = input.map(Number);

function solution(list) {
  let result = '';
  let heap = new AbsHeap();
  for (let l of list) {
    if (l === 0) result += heap.pop() + '\n';
    else heap.push(l);
  }
  return result;
}

console.log(solution(list));
