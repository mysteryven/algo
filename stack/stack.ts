import { generatorNode } from "../linkedList/linkedList";

/**
 * 基于链表实现栈
 */

interface Stack {
  push: (item: any) => void;
  pop: () => any;
  clear: () => void;
  length: number;
  getTop: () => any;
}

interface IChrome {
  pushPage: (url: string) => void;
  goAhead: () => boolean;
  goBack: () => boolean;
  showPage: () => string;
}

function stack(): Stack {
  let top = null;
  let _length = 0;
  return {
    push(item) {
      let node = generatorNode(item);
      if (top !== null) {
        node.next = top;
      }
      top = node;
      _length++;
    },
    pop() {
      if (top === null) {
        return false
      }
      const res = top.value;
      top = top.next;
      _length--;
      return res;
    },
    clear() {
      while (top !== null) {
        top = top.next;
        _length--;
      }
    },
    get length() {
      return _length;
    },
    getTop() {
      if (top === null) {
        return null
      }
      return top.value;
    }

  }
}

function Chrome(): IChrome {
  let enStack = stack();
  let deStack = stack();

  return {
    pushPage(url: string) {
      enStack.push(url)
      if (deStack.length > 0) {
        deStack.clear()
      }
    },
    goAhead() {
      let nextUrl = deStack.pop();
      if (nextUrl !== false) {
        enStack.push(nextUrl);
        return true;
      }
      return false;
    },
    goBack() {
      if (enStack.length <= 1) {
        return false
      }

      let prevUrl = enStack.pop();
      deStack.push(prevUrl);
      return true;
    },
    showPage() {
      return enStack.getTop();
    }
  }
}

export {
  stack,
  Chrome
};