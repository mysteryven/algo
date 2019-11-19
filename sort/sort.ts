type ArrType = string[] | number[]

function exch(index1: number, index2: number, arr: ArrType) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function insertSort(arr: ArrType) {
  const length = arr.length;
  if (length === 1) {
    return arr;
  }
  for (let i = 1; i < length; i++) {
    let j = i;
    while (arr[j - 1] > arr[j]) {
      exch(j, j - 1, arr);
      j--;
    }
  }
  return arr;
}

function mergeSort(arr: ArrType) {
  if (arr.length === 1) {
    return arr;
  }

  let res = mergeSort_c(arr, 0, arr.length - 1);
  return res;

  function mergeSort_c(arr: ArrType, lo: number, hi: number) {
    if (hi <= lo) {
      return;
    }
    let mid = lo + Math.floor((hi - lo) / 2);
    mergeSort_c(arr, lo, mid)
    mergeSort_c(arr, mid + 1, hi)
    return merge(arr, lo, mid, hi);
  }
}

function merge(arr: ArrType, lo: number, mid: number, hi: number) {
  const temp = [];
  let tempIndex = 0;
  let i = lo;
  let j = Math.min(mid + 1, hi);

  while (i <= mid && j <= hi) {
    if (arr[i] > arr[j]) {
      temp[tempIndex] = arr[j];
      j++;
    } else {
      temp[tempIndex] = arr[i];
      i++
    }
    tempIndex++
  }

  while (i <= mid) {
    temp[tempIndex] = arr[i];
    tempIndex++
    i++
  }

  while (j <= hi) {
    temp[tempIndex] = arr[j];
    j++
    tempIndex++
  }
  for (let i = lo; i <= hi; i++) {
    arr[i] = temp[i - lo];
  }
  return arr;
}

function quickSort(arr) {
  quickSort_inner(arr, 0, arr.length - 1);
  return arr;

  function quickSort_inner(arr, lo, hi) {
    if (hi - lo < 1) {
      return;
    }
    const j = partition(arr, lo, hi);
    quickSort_inner(arr, lo, j)
    quickSort_inner(arr, j + 1, hi)
  }
}

function partition(arr: ArrType, lo: number = 0, hi: number = arr.length - 1, isKth?: boolean) {
  let pivot = lo;

  let i = lo + 1;
  let j = hi;

  while (true) {
    while (arr[i] <= arr[pivot] && i <= hi - 1) {
      i++;
    }

    while (arr[j] >= arr[pivot] && j > lo) {
      j--;
    }

    if (j <= i) {
      break;
    }
    exch(i, j, arr);
  }

  exch(pivot, j, arr);
  return j
}

function selectSort(arr: ArrType) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    exch(min, i, arr);
  }
  return arr;
}

function bucketSort(arr: number[], size: number) {
  if (arr.length <= 1) {
    return [...arr];
  }

  const bucket: number[][] = [];
  let max = arr[0], min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = i;
    }
    if (arr[i] < min) {
      min = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / size);
    if (!bucket[bucketIndex]) {
      bucket[bucketIndex] = []
    }
    let currentBucket = bucket[bucketIndex];
    currentBucket.push(arr[i]);
    let j = currentBucket.length - 1;
    while (j >= 1 && currentBucket[j] <= currentBucket[j - 1]) {
      exch(j, j - 1, currentBucket);
      j--;
    }
  }

  const res = bucket.reduce((prev, current) => {
    return [...prev, ...current];
  }, [])

  return res;
}
// 用快排的思想
function kthNum(arr: ArrType, n: number) {
  return kthNumInner([...arr] as number[], 0, arr.length - 1);

  function kthNumInner(arr: ArrType, lo: number, hi: number) {
    const target = partition(arr, lo, hi);
    if (target + 1 === n) {
      return arr[target]
    } else if (target + 1 > n) {
      return kthNumInner(arr, lo, target - 1)
    } else {
      return kthNumInner(arr, target + 1, hi)
    }
  }
}

function countingSort(arr: number[]) {
  let r: number[] = [];
  let c: number[] = []

  if (arr.length <= 1) {
    return [...arr];
  }

  let min:number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > (arr[i] as number)) {
      min = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const index = arr[i] - min;
    if (r[index]) {
      r[index] += 1;
    } else {
      r[index] = 1;
    }
  }

  for (let i: number = 0; i < r.length; i++) {
    if (!r[i]) {
      r[i] = 0;
    }

    if (i > 0) {
      r[i] = r[i - 1] + r[i]
    }
  }

  for (let i: number = arr.length - 1; i >= 0; i--) {
    c[r[arr[i] - min] - 1] = arr[i];
    r[arr[i] - min] -= 1;
  }
  return c;
}

export {
  insertSort,
  mergeSort,
  merge,
  partition,
  quickSort,
  selectSort,
  bucketSort,
  kthNum,
  countingSort
}
