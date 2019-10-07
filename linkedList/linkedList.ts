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
      while (current !== null) {
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
      while (current.next !== null) {
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

// is circle in linkedList
function isCircle(head: LinkedNode) {
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    if (fast === slow) {
      return true
    }
    fast = fast.next.next;
    slow = slow.next;
  }

  return false
}

function mergeList(a: LinkedNode, b: LinkedNode) {
  if (!a || a.next == null) {
    return b;
  } else if (!b || b.next === null) {
    return a;
  }

  let result = generatorNode('head');
  let resultPointer = result;
  let aPointer = a.next;
  let bPointer = b.next;

  while (aPointer !== null && bPointer !== null) {
    if (aPointer.value < bPointer.value) {
      resultPointer.next = aPointer
      resultPointer = resultPointer.next
      aPointer = aPointer.next;
    } else {
      resultPointer.next = bPointer
      resultPointer = resultPointer.next
      bPointer = bPointer.next
    }
  }

  if (aPointer === null) {
    resultPointer.next = bPointer
  } else if (bPointer === null) {
    resultPointer.next = aPointer
  }

  return result
}

module.exports.nodes = linkedList;
module.exports.isCircle = isCircle;
module.exports.mergeList = mergeList;
module.exports.generatorNode = generatorNode;
