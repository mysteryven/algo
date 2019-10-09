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

module.exports.stack = stack;