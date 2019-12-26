interface TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
  data: number;
}

function gTreeNode(num: number): TreeNode {
  return {
    left: null,
    right: null,
    data: num
  };
}

class Tree {
  private root: TreeNode | null = null;

  insert(data: number) {
    if (this.root === null) {
      this.root = gTreeNode(data);
    } else {
      let p: TreeNode = this.root;
      while (true) {
        if (data < p.data) {
          if (p.left) {
            p = p.left;
          } else {
            p.left = gTreeNode(data);
            break;
          }
        } else {
          if (p.right) {
            p = p.right;
          } else {
            p.right = gTreeNode(data);
            break;
          }
        }
      }
    }
  }

  get trees() {
    return this.root;
  }

  remove(num) {
    if (!this.root) {
      return null;
    }
  }

  find(num) {
    let currentNode = null;
    let parentNode = null;
    let type = "left";

    return find_inner(num, this.root);

    function find_inner(num, node) {
      if (!node) {
        return false;
      }
    }

    return {
      currentNode,
      type,
      parentNode
    };
  }

  inOrderTraversal() {
    let a = [];
    if (!this.root) {
      return [];
    }
    function print(node) {
      if (!node) {
        return;
      }
      print(node.left);
      a.push(node.data);
      print(node.right);
    }
    print(this.root);
    return a;
  }
}

export { Tree };
