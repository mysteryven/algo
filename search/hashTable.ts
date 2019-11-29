import { isTSNamespaceExportDeclaration } from "@babel/types";

interface ListNode {
  val: number;
  next: ListNode;
}

// 使用简单的除法散列
function hash(a:number, b:number) {
  return a % b;
}

function listNode(val?: number | 'head') {
  this.val = val;
  this.next = null;
  this.previous = null
}

const hash_length = 12 

class hashTable {
  private arr:ListNode[]; 
  private max_length: number

  constructor() {
    this.arr = new Array(hash_length).fill(new listNode('head'));
  }

  insert(val: number) {
    const index = hash(val, hash_length);
    this.insertNode(this.arr[index], val);
  }

  insertNode(head, val: number) {
    const p = head; 
    const newNode = new listNode(val)
    if (head.next === null) {
      head.next = newNode;
      newNode.previous = head;
    } else {
      const xxx = head.next;
      head.next = newNode;
      newNode.previous = head;
      newNode.next = xxx;
      xxx.previous = newNode;
    } 
  }
}



export default hashTable;