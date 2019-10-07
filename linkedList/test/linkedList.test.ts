let link = require('../linkedList.ts');

describe('LinkedList', () => {
  let nodes1 = link.nodes()
  let nodesExample = nodes1();
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
  })

  it('can find right item with param, and return `false` if not find', () => {
    expect(nodesExample.find(1).value).toBe(1);
    expect(nodesExample.find('hello').value).toBe('hello');
    expect(nodesExample.find()).toBe(false);
  })

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
  })
});

describe('isCircle', () => {
  let nodes2 = link.nodes()
  let nodesExample2 = nodes2();
  it('return `false` if no circle', () => {
    expect(link.isCircle(nodesExample2.get())).toBe(false);
    nodesExample2.insert(1);
    expect(link.isCircle(nodesExample2.get())).toBe(false);
    nodesExample2.insert(2);
    expect(link.isCircle(nodesExample2.get())).toBe(false);
  })

  it('return `true` if has circle', () => {
    const generatorNode = link.generatorNode;
    let a1 = generatorNode('head')
    let a2 = generatorNode('1')
    let a3 = generatorNode('2')
    let a4 = generatorNode('4')
    a1.next = a2;
    a2.next = a3;
    a3.next = a4;
    a4.next = a1;
    expect(link.isCircle(a1)).toBe(true);
  })
  it('can judge whether a single node is a circle', () => {
    const generatorNode = link.generatorNode;
    let a1 = generatorNode('head')
    a1.next = a1;
    expect(link.isCircle(a1)).toBe(true);
  })
})

describe('megrgeList', () => {
  it('return second if first is `null`', () => {
    let a = link.nodes()();
    let b = link.nodes()();
    b.insert(1)
    expect(link.mergeList(a.get(), b.get())).toEqual({
      value: 'head',
      next: {
        value: 1,
        next: null
      }
    })
  });
  it('return first if first is not `null` and second is `null`', () => {
    let a = link.nodes()();
    let b = link.nodes()();
    b.insert(1)
    expect(link.mergeList(b.get(), a.get())).toEqual({
      value: 'head',
      next: {
        value: 1,
        next: null
      }
    })
  });

  it('can merge success', () => {
    let a = link.nodes()();
    let b = link.nodes()();
    a.insert(1)
    a.insert(3)
    a.insert(5)
    a.insert(6)

    b.insert(2);
    b.insert(4);

    expect(link.mergeList(b.get(), a.get())).toEqual({
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
    })
  })
});

describe('deleteLastIndexOf', () => {
  it('will return `false` if index is not invalid', () => {
    let deleteNodes = link.nodes()();
    deleteNodes.insert('1')
    deleteNodes.insert('2')
    expect(link.deleteLastKth(deleteNodes.get(), -1)).toBe(false);
    expect(link.deleteLastKth(deleteNodes.get(), 3)).toBe(false);
  })
  it('can delete successful when list only one node', () => {
    let deleteNodes = link.nodes()();
    deleteNodes.insert(1)
    let resultNodes = link.nodes()();
    expect(link.deleteLastKth(deleteNodes.get(), 1)).toEqual(resultNodes.get());
  })
  it('will return list when delete success', () => {
    let deleteNodes = link.nodes()();
    deleteNodes.insert(1)
    deleteNodes.insert(2)
    deleteNodes.insert(3)
    let resultNodes = link.nodes()();
    resultNodes.insert(1)
    resultNodes.insert(3)
    expect(link.deleteLastKth(deleteNodes.get(), 2)).toEqual(resultNodes.get());
  })
})

describe('findMiddleNode', () => {
  it('will find correct node when length is odd', () => {
    let node4 = link.nodes()();
    node4.insert(1)
    expect(link.findMiddleNode(node4.get()).value).toBe(1);
    node4.insert(2)
    node4.insert(3)
    expect(link.findMiddleNode(node4.get()).value).toBe(2);
  })
  it('will find correct node when length is even', () => {
    let node5 = link.nodes()();
    node5.insert(1)
    node5.insert(2)
    node5.insert(3)
    node5.insert(4)
    expect(link.findMiddleNode(node5.get()).value).toBe(3);
  })
})
