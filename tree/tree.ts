
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
  }
}

class Tree {
  private root: TreeNode | null = null;

  insert(data: number) {
    if (this.root === null) {
      this.root = gTreeNode(data);
    } else {
      let p:TreeNode = this.root;
      while(true) {
        if (data < p.data) {
          if (p.left) {
            p = p.left;
          } else {
            p.left = gTreeNode(data)
            break;
          }
        } else {
          if (p.right) {
            p = p.right;
          } else {
            p.right = gTreeNode(data)
            break;
          }
        }
      }
    }
  }

  get trees() {
    return this.root;
  }
}

export {
  Tree
}