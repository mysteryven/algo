import { insertSort } from './sort';

const res = [1, 2, 3, 4, 5];

describe('insertSort', () => {
  testGroup(insertSort)
})


function testGroup(fun) {
  it('works when arr length is 1', () => {
    const a = [1];
    fun(a);
    expect(a).toEqual([1])
  })
  it('works when arr is reverse', () => {
    const a = [5, 4, 3, 2, 1];
    fun(a);
    expect(a).toEqual(res)
  })
  it('works when arr is ordered', () => {
    const a = [1, 2, 3, 4, 5];
    fun(a);
    expect(a).toEqual(res)
  })
  it('works when arr is in random order', () => {
    const a = [3, 2, 1, 4, 5];
    fun(a);
    expect(a).toEqual(res)
  })
}