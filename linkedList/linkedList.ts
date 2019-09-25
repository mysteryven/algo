// 链表
interface Node {
  value: any;
  next: Object;
}

interface LinkedList {
  insert: () => void;
  get: () => number;
}

function linkedList(): Function {
  return function inner(): LinkedList {
    return {
      insert: () => { },
      get: () => 1
    }
  }
}

module.exports = linkedList();
