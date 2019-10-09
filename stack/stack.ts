import { generatorNode } from "../linkedList/linkedList";

/**
 * 基于链表实现栈
 */

interface Stack {
  push: (item: any) => void
  pop: () => any
}

function stack(): Stack {
  let top = null;
  return {
    push: (item) => {
      let node = generatorNode(item);
      if (top !== null) {
        node.next = top;
      }
      top = node;
    },
    pop: () => {
      if (top === null) {
        return false
      }
      const res = top.value;
      top = top.next;
      return res;
    },
  }
}

export {
  stack
};