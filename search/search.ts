// assume array is sorted
function binarySearch<T>(a: T[], target: T) {
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

// accuracy is 0.01
function sqrt(n: number) {
  return sqrt_inner(0, n);

  function sqrt_inner(lo: number, hi: number) {
    const mid = (lo + (hi - lo) / 2);

    if (Math.abs(mid * mid - n) < 0.01) {
      return mid;
    } else if (mid * mid > n) {
      return sqrt_inner(lo, mid);
    } else {
      return sqrt_inner(mid, hi)
    }
  }
}

function findFirstMatched<T>(a: T[], target: T) {
  return findFirstMatched_inner(a, 0, a.length - 1);

  function findFirstMatched_inner(a: T[], lo: number, hi: number) {
    if (hi <= lo) {
      if (a[lo] === target) {
        return lo;
      }
      return false;
    }
    let mid = lo + Math.floor((hi - lo) / 2);
    if (a[mid] === target) {
      if (a[mid-1] === target) {
        return findFirstMatched_inner(a, lo, mid - 1)
      }
      
      return mid
    } else if (a[mid] > target) {
      return findFirstMatched_inner(a, lo, mid - 1);
    } else {
      return findFirstMatched_inner(a, mid + 1, hi);
    }
  }
}

export {
  binarySearch,
  sqrt,
  findFirstMatched,
}