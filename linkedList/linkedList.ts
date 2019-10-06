// 链表
interface LinkedNode {
  value: any;
  next: LinkedNode | null;
}

interface LinkedList {
  insert: (val: any) => void;
  find: (val: any) => LinkedNode | boolean;
  get: () => LinkedNode;
}

function generatorNode(val: any): LinkedNode {
  return {
    value: val,
    next: null,
  }
}

function linkedList(): Function {
  let head = generatorNode('');
  let current = head;

  return function inner(): LinkedList {
    return {
      insert,
      find,
      get
    }

    function insert(val: any) {
      const newNode = generatorNode(val);
      current.next = newNode;
      current = newNode;
    }

    function get() {
      return head
    }

    function find(val: any) {
      let target: LinkedNode = head.next;
      while (target !== null && target.value !== val) {
        target = target.next;
      }
      if (target === null) {
        return false;
      }
      return target;
    }
  }
}

module.exports = linkedList();
