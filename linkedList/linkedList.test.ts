import {LinkedNode} from './linkedList';
import {
  linkedList,
  findMiddleNode,
  deleteLastKth,
  isCircle,
  mergeList,
  generatorNode
} from './linkedList';

describe('LinkedList', () => {
  let nodesExample = linkedList();
  nodesExample.insert(1);
  nodesExample.insert('hello');

  it('can insert at the last position', () => {
    expect(nodesExample.get()).toEqual({
      value: 'head',
      next: {
        value: 1,
        next: {
          value: 'hello',
          next: null
        },
      }
    });
  });

  it('can find right item with param, and return `false` if not find', () => {
    expect((nodesExample.find(1) as LinkedNode).value).toBe(1);
    expect((nodesExample.find('hello') as LinkedNode).value).toBe('hello');
    expect(nodesExample.find()).toBe(false);
  });

  it('can reverse linkedList', () => {
    const reverseLinkedList = nodesExample.reverse();
    expect(reverseLinkedList).toEqual({
      value: 'head',
      next: {
        value: 'hello',
        next: {
          value: 1,
          next: null
        },
      }
    });
  });
});

describe('isCircle', () => {
  let nodesExample2 = linkedList();
  it('return `false` if no circle', () => {
    expect(isCircle(nodesExample2.get())).toBe(false);
    nodesExample2.insert(1);
    expect(isCircle(nodesExample2.get())).toBe(false);
    nodesExample2.insert(2);
    expect(isCircle(nodesExample2.get())).toBe(false);
  });

  it('return `true` if has circle', () => {
    let a1 = generatorNode('head');
    let a2 = generatorNode('1');
    let a3 = generatorNode('2');
    let a4 = generatorNode('4');
    a1.next = a2;
    a2.next = a3;
    a3.next = a4;
    a4.next = a1;
    expect(isCircle(a1)).toBe(true);
  });
  it('can judge whether a single node is a circle', () => {
    let a1 = generatorNode('head');
    a1.next = a1;
    expect(isCircle(a1)).toBe(true);
  });
});

describe('megrgeList', () => {
  it('return second if first is `null`', () => {
    let a = linkedList();
    let b = linkedList();
    b.insert(1);
    expect(mergeList(a.get(), b.get())).toEqual({
      value: 'head',
      next: {
        value: 1,
        next: null
      }
    });
  });
  it('return first if first is not `null` and second is `null`', () => {
    let a = linkedList();
    let b = linkedList();
    b.insert(1);
    expect(mergeList(b.get(), a.get())).toEqual({
      value: 'head',
      next: {
        value: 1,
        next: null
      }
    });
  });

  it('can merge success if second param is longer', () => {
    let a = linkedList();
    let b = linkedList();
    a.insert(1);
    a.insert(3);
    a.insert(5);
    a.insert(6);

    b.insert(2);
    b.insert(4);

    const result = {
      value: 'head',
      next: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: {
                value: 5,
                next: {
                  value: 6,
                  next: null
                }
              }
            }
          }
        }
      }
    };

    expect(mergeList(b.get(), a.get())).toEqual(result);
  });

  it('can merge success if first params is longer', () => {
    let a = linkedList();
    let b = linkedList();
    a.insert(1);
    a.insert(3);
    a.insert(5);

    b.insert(2);

    const result = {
      value: 'head',
      next: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 5,
              next: null
            }
          }
        }
      }
    };


    expect(mergeList(a.get(), b.get())).toEqual(result);
  });

});

describe('deleteLastIndexOf', () => {
  it('will return `false` if index is not invalid', () => {
    let deleteNodes = linkedList();
    deleteNodes.insert('1');
    deleteNodes.insert('2');
    expect(deleteLastKth(deleteNodes.get(), -1)).toBe(false);
    expect(deleteLastKth(deleteNodes.get(), 3)).toBe(false);
  });
  it('can delete successful when list only one node', () => {
    let deleteNodes = linkedList();
    deleteNodes.insert(1);
    let resultNodes = linkedList();
    expect(deleteLastKth(deleteNodes.get(), 1)).toEqual(resultNodes.get());
  });
  it('will return list when delete success', () => {
    let deleteNodes = linkedList();
    deleteNodes.insert(1);
    deleteNodes.insert(2);
    deleteNodes.insert(3);
    let resultNodes = linkedList();
    resultNodes.insert(1);
    resultNodes.insert(3);
    expect(deleteLastKth(deleteNodes.get(), 2)).toEqual(resultNodes.get());
  });
});

describe('findMiddleNode', () => {
  it('will find correct node when length is odd', () => {
    let node4 = linkedList();
    node4.insert(1);
    expect(findMiddleNode(node4.get()).value).toBe(1);
    node4.insert(2);
    node4.insert(3);
    expect(findMiddleNode(node4.get()).value).toBe(2);
  });
  it('will find correct node when length is even', () => {
    let node5 = linkedList();
    node5.insert(1);
    node5.insert(2);
    node5.insert(3);
    node5.insert(4);
    expect(findMiddleNode(node5.get()).value).toBe(3);
  });
});