let nodes = require('../linkedList.ts');

describe('LinkedList', () => {
  let nodesExample = nodes();

  beforeEach(() => {
    nodesExample.insert(1);
    nodesExample.insert('hello');
  })

  it('can insert in right position', () => {
    expect(nodesExample.get()).toEqual({
      value: '',
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
  })
});
