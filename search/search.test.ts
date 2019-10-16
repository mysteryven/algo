import { binarySearch, sqrt, findFirstMatched } from './search';

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

describe('sqrt', () => {
  it('is right', () => {
    let accuracy = 0.01;
    expect(isAccuracy(5, sqrt(5) * sqrt(5), accuracy))
    expect(isAccuracy(9, sqrt(9) * sqrt(9), accuracy))
  })
})

describe('findFirstMatched', () => {
  it('works when its length is odd', () => {
    const a1 = [1];
    const a2 = [0, 1, 2, 2, 2, 5, 8];
    const a3 = [1, 1, 1, 1, 1, 1, 1];
    const a4 = [0, 0, 0, 2, 2, 5, 8];
    expect(findFirstMatched(a1, 1)).toBe(0)
    expect(findFirstMatched(a1, 2)).toBe(false)
    expect(findFirstMatched(a2, 2)).toBe(2)
    expect(findFirstMatched(a3, 1)).toBe(0)
    expect(findFirstMatched(a4, 0)).toBe(0)
  })

  it('works when its length is even', () => {
    const a1 = [0, 5, 5, 5, 5, 5, 8, 10];
    const a2 = [1, 1, 1, 1, 1, 1, 1, 1];
    const a3 = [0, 0, 0, 0, 1, 1, 1, 1];
    const a4 = [0, 0]
    expect(findFirstMatched(a1, 5)).toBe(1)
    expect(findFirstMatched(a1, 5)).toBe(1)
    expect(findFirstMatched(a2, 1)).toBe(0)
    expect(findFirstMatched(a3, 0)).toBe(0)
    expect(findFirstMatched(a4, 0)).toBe(0)
    expect(findFirstMatched(a4, 8)).toBe(false)
  })

  it('returns if not found ', () => {
    const a2 = [0, 1, 2, 5, 8, 10];
    expect(binarySearch(a2, 11)).toBe(false)
    expect(binarySearch(a2, -1)).toBe(false)
  })
})

function isAccuracy(n: number, res: number, accuracy: number) {
  return (Math.abs(n - res) < accuracy)
}