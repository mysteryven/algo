import { fibo, factorial } from './recursive';

describe('fibo', () => {
  it('returns 1 if `n` is 1', () => {
    expect(fibo(1)).toBe(1)
  })
  it('returns 2 if `n` is 2', () => {
    expect(fibo(2)).toBe(2)
  })
  it('returns 10 if `n` is 89', () => {
    expect(fibo(10)).toBe(89)
  })
})

describe('factorial', () => {
  it('returns 1 if n is 1', () => {
    expect(factorial(1)).toBe(1);
  })
  it('returns right nubmer if n is bigger than 1 ', () => {
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  })
})