let nodes = require('../linkedList.ts');

describe('LinkedList', () => {
  let nodesExample = nodes();
  nodesExample.insert(1);
  nodesExample.insert('hello');

  it('can insert in right position', () => {
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
    const reverseLinkedList  = nodesExample.reverse();
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
