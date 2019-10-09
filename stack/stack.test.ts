import { stack } from './stack';

describe('stack', () => {
  it('push', () => {
    var a = stack();
    a.push(1);
    expect(a.get()).toEqual([1]);
  })
})

