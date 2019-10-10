/**
 * 基于数组的循环队列
 * 因为循环队列解决的是不用在出队后搬迁数据了
 * 所以没有选择链表来实现
 * 
 */
import { generatorNode } from "../linkedList/linkedList";

interface CircleQueue {
  enQueue: (val: any) => boolean,
  deQueue: () => any;
}

function circleQueue(len: number): CircleQueue {
  const _len = len + 1
  let arr: Array<any> = []
  for (let i = 0; i < _len; i++) {
    arr[i] = null
  }

  let head = 0;
  let tail = 0;

  return {
    enQueue(val) {
      if ((tail + 1) % _len === head) {
        return false
      }
      arr[tail] = val;
      tail = (tail + 1) % _len;
      return true
    },
    deQueue() {
      if (head === tail && arr[head] === null) {
        return false
      }
      let res = arr[head];
      arr[head] = null;
      head = (head + 1) % _len;
      return res;
    },
  }
}

export {
  circleQueue
}