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
