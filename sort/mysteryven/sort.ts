type ArrType = string[] | number[]

function exch(index1:number, index2:number, arr: ArrType) {
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
    while(arr[j-1] > arr[j]) {
      exch(j, j-1, arr);
      j--;
    }
  }
  return arr;
}

export {
  insertSort
}
