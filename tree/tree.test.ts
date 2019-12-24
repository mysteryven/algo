
import {Tree} from './tree';

describe('tree', () => {
  it('renders without error', () => {
    var tree = new Tree();
    expect(tree.trees).toBe(null);
  })

  it('can insert one node', () => {
    var tree = new Tree();
    tree.insert(2)
    expect(tree.trees).toEqual({data: 2, left: null, right: null});
  })

  it('can insert many nodes', () => {
    var tree = new Tree();
    tree.insert(2)
    tree.insert(1)
    tree.insert(3)
    tree.insert(3)
    tree.insert(6)
    expect(tree.trees).toEqual({
      data: 2, 
      left: {
        data: 1,
        left: null,
        right: null
      }, 
      right: {
        data: 3,
        left: null,
        right: {
          data: 3,
          left: null,
          right: {
            data: 6,
            left: null,
            right: null
          }
        }
      }
    });
  })
})