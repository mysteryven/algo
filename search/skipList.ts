// 不保证代码的正确性，参考自 https://github.com/wangzheng0822/algo/blob/master/javascript/17_skiplist/SkipList.js

const MAX_LEVEL = 16;

interface NodeType {
  data: number;
  refer: NodeType[];
}

function ListNode() {
  this.data = -1;
  this.refer = new Array(MAX_LEVEL);
}

function randomLevel() {
  let level = 1;
  for (let i = 1; i < MAX_LEVEL; i++) {
    if (Math.random() > 0.5) {
      level++;
    }
  }

  return level;
}

class SkipList {
  header: NodeType;
  levelCount: number;

  constructor() {
    this.header = new ListNode();
    this.levelCount = 1;
  }

  insert(value: number) {
    let p: NodeType = this.header;
    const level = randomLevel();
    let update = new Array(level).fill(new Node());
    let newNode: NodeType = new ListNode();

    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i]
      }

      update[i] = p.refer[i];
    }

    for (let i = 0; i < level; i++) {
      newNode.refer[i] = update[i].refer[i];
      update[i].refer[i] = newNode;
    }

    if (this.levelCount < level) {
      this.levelCount = level;
    }
  }

  find(value: number) {
    if (!value) {
      return null;
    }

    let p: NodeType = this.header;
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i]
      }
    }

    if (p.refer[0] !== undefined && p.refer[0].data === value) {
      return p.refer[0];
    }
    return null;
  }

  remove(value: number) {
    if (!value) {
      return;
    }
    let p: NodeType = this.header;
    let deleteNode = new Array(MAX_LEVEL).filter(new ListNode())

    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i];
      }

      deleteNode[i] = p.refer[i];
    }

    if (p.refer[0] !== undefined && p.refer[0].data === value) {
      for (let i = 0; i <= this.levelCount - 1; i++) {
        if (deleteNode[i].refer[i] !== undefined && deleteNode[i].refer[i].data === value) {
          deleteNode[i].refer[i] = deleteNode[i].refer[i].refer[i];
        }
      }
    }
  }
}