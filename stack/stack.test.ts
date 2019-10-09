import { stack } from './stack';

describe('stack', () => {
  it('push and pop', () => {
    var a = stack();
    expect(a.pop()).toEqual(false);
    a.push(1);
    a.push(2);
    a.push(3);
    expect(a.pop()).toEqual(3);
    expect(a.pop()).toEqual(2);
    expect(a.pop()).toEqual(1);
    expect(a.pop()).toEqual(false);
  })
})