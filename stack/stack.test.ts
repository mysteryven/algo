const stackExample = require('./stack');

describe('stack', () => {
  it('push', () => {
    var a = stackExample.stack();
    a.push(1);
    expect(a.get()).toEqual([1]);
  })
})

