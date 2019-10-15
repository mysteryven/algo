import { binarySearch } from './search';

describe('binarySearch', () => {
  it('works when its length is odd', () => {
    const a1 = [1];
    const a2 = [0, 1, 2, 5, 8];
    expect(binarySearch(a1, 1)).toBe(0)
    expect(binarySearch(a2, 5)).toBe(3)
  })

  it('works when its length is odd', () => {
    const a2 = [0, 1, 2, 5, 8, 10];
    expect(binarySearch(a2, 8)).toBe(4)
  })

  it('returns if not found ', () => {
    const a2 = [0, 1, 2, 5, 8, 10];
    expect(binarySearch(a2, 11)).toBe(false)
    expect(binarySearch(a2, -1)).toBe(false)
  })
})