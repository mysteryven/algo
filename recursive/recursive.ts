function fibo(n: nubmer) {
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  } else {
    return fibo(n - 1) + fibo(n - 2) 
  }
}

function factorial(n: number) {
  if (n === 1) {
    return 1
  }
  else return n * factorial(n-1)
}

export {
  fibo,
  factorial,
}