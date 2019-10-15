// assume array is sorted
function binarySearch<T>(a: T[], target: T ) {
  return binarySearch_inner(a, 0, a.length - 1);

  function binarySearch_inner(a: T[], lo: number, hi: number) {
    if (hi <= lo) {
      if (a[lo] === target) {
        return lo;
      }
      return false;
    }
    const mid = lo + Math.floor((hi - lo) / 2); 
    if (a[mid] === target) {
      return mid
    } else if (a[mid] > target) {
      return binarySearch_inner(a, lo, mid - 1);
    } else {
      return binarySearch_inner(a, mid + 1, hi);
    }
  }

}

export {
  binarySearch,
}