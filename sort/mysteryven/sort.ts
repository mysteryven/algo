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


// TODO it will be refactor soon
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
  quickSort_inner(arr, 0, arr.length -1);
  return arr; 

  function quickSort_inner(arr, lo, hi) {
    if (hi - lo < 1) {
      return;
    }
    let mid = lo + Math.floor((hi - lo) / 2);
    const j = partition(arr, lo, hi);
    quickSort_inner(arr, lo, j)
    quickSort_inner(arr, j + 1, hi)
  }
}

function partition(arr: ArrType, lo: number = 0, hi: number = arr.length - 1) {
  let pivot = lo;
  let i = lo + 1;
  let j = hi;

  while (true) {
    while (arr[i] < arr[pivot] && i <= hi) {
      i++;
    }

    while (arr[j] > arr[pivot] && j >= lo) {
      j--;
    }

    if (j < i) {
      break;
    }
    exch(i, j, arr);
  }

  exch(pivot, j, arr);
  return j 
}



export {
  insertSort,
  mergeSort,
  merge,
  partition,
  quickSort,
}
