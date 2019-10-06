// 链表
interface LinkedNode {
  value: any;
  next: LinkedNode | null;
}

interface LinkedList {
  insert: (val: any) => void;
  find: (val: any) => LinkedNode | boolean;
  get: () => LinkedNode;
  reverse: () => LinkedNode;
}

function generatorNode(val: any): LinkedNode {
  return {
    value: val,
    next: null,
  };
}

function linkedList(): Function {
  let head = generatorNode('head');

  return function inner(): LinkedList {
    return {
      insert,
      find,
      get,
      reverse
    };

    function reverse() {
      let root = generatorNode('head');
      let current = head.next;
      while(current !== null) {
        let next = current.next;
        current.next = root.next;
        root.next = current;
        current = next;
      }
      head = root;
      return head;
    }


    function insert(val: any) {
      const newNode = generatorNode(val);
      let current = head;
      while(current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    function get() {
      return head;
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
  };
}

module.exports = linkedList();
