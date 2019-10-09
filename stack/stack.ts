/**
 * 基于链表实现栈
 */

function stack() {
  let a = []
  return {
    push: (item) => {
      a.push(item)
    },
    pop: () => {
      a.pop()
    },
    get: () => a
  }
}

export {
  stack
};