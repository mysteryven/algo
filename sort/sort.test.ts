import {
  insertSort,
  mergeSort,
  merge,
  partition,
  quickSort,
  selectSort,
  bucketSort,
  kthNum
} from './sort';

const res = [1, 2, 3, 4, 5];

describe('insertSort', () => {
  testGroup(insertSort)
})

describe('mergeSort', () => {
  testGroup(mergeSort)
})

describe('merge function', () => {
  it('can merge 1 element', () => {
    let a = [2];
    expect(merge(a, 0, 0, 0)).toEqual([2])
  })
  it('can merge 2 element', () => {
    let a = [2, 1];
    expect(merge(a, 0, 0, 1)).toEqual([1, 2])
  })
  it('can merge 3 element', () => {
    let a = [1, 3, 2];
    expect(merge(a, 0, 1, 2)).toEqual([1, 2, 3])
  })
  it('can merge 6 element', () => {
    let a = [1, 2, 3, 0, 5, 9];
    expect(merge(a, 0, 2, 5)).toEqual([0, 1, 2, 3, 5, 9])
  })
})

describe('quickSort', () => {
  describe('partition', () => {
    it('works when array has one element', () => {
      const a = [1];
      partition(a);
      expect(a).toEqual([1])
    })
    it('works when array lengh is even', () => {
      const a1 = [2, 1];
      const a2 = [3, 1, 4, 5, 2];
      partition(a1);
      partition(a2)
      expect(a1).toEqual([1, 2]);
      expect(a2).toEqual([2, 1, 3, 5, 4]);
    })
    it('works when array length is odd', () => {
      const a1 = [2, 1, 3];
      partition(a1)
      expect(a1).toEqual([1, 2, 3]);
      const a2 = [3, 1, 4, 5, 2, 6];
      partition(a2)
      expect(a2).toEqual([2, 1, 3, 5, 4, 6]);
    })
    describe('quicksort function', () => {
      testGroup(quickSort);
    })
  })
})

function testGroup(fun) {
  it('works when arr length is 1', () => {
    const a = [1];
    const b = fun(a);
    expect(b).toEqual([1])
  })
  it('works when arr is reverse', () => {
    const a = [5, 4, 3, 2, 1];
    commonExpect(a)
  })
  it('works when arr is ordered', () => {
    const a = [1, 2, 3, 4, 5];
    commonExpect(a)
  })
  it('works when arr is in random order', () => {
    const a1 = [1, 2, 3, 0, 5, 9];
    const a2 = [1, 2, 0, 5, 9];
    const b1 = fun(a1);
    const b2 = fun(a2);
    expect(b1).toEqual([0, 1, 2, 3, 5, 9])
    expect(b2).toEqual([0, 1, 2, 5, 9])
  })
  function commonExpect(a) {
    const b = fun(a);
    expect(b).toEqual(res)
  }
}

describe('selectSort', () => {
  testGroup(selectSort);
})

describe('bucketSort', () => {
  it('works when length <=1 ', () => {
    const a = [];
    expect(bucketSort(a, 5)).toEqual([]);
  })
  it('get same result with quicksort', () => {
    const a = [22, 2, 4, 49, 11, 12, 44, 55, 1, 23, 24, 33, 4, 2, 5, 1, 25, 38, 36, 14, 48, 5, 15, 55, 59]
    const res1 = bucketSort(a, 5);
    const res2 = quickSort(a);
    console.log(res1)
    console.log(res2)
    expect(res1).toEqual(res2);
  })
})

describe('kthNum', () => {
  const a1 = [1, 4, 8, 4, 5];
  const a2 = [1, 4, 8, 4, 5];
  it ('can find ktn number', () => {
    expect(kthNum(a1, 3)).toBe(4)
    expect(kthNum(a1, 5)).toBe(8)
  })
})
