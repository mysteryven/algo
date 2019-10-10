
// 排序
interface Sort {
  bubbleSort: (arr: Array<number>) => Array<number>;
}

function bubbleSort(arr: Array<number>) {
  const arrLength = arr.length;
  if (arr && !arr.length) {
    return;
  }
  for (let i = 0; i < arrLength - 1; i++) {
    for (let j = 0; j < arrLength - 1 - i; j++) {
      const lastNum = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = lastNum;
      }
    }
  }
  return arr;
}

export {
  bubbleSort,
}