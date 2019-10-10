import { stack, Chrome } from './stack';

describe('stack', () => {
  it('push and pop with no error', () => {
    var a = stack();
    expect(a.pop()).toEqual(false);
    a.push(1);
    a.push(2);
    a.push(3);
    expect(a.pop()).toEqual(3);
    expect(a.pop()).toEqual(2);
    expect(a.pop()).toEqual(1);
    expect(a.pop()).toEqual(false);
  })
  it('can compute stack length', () => {
    var a = stack();
    expect(a.length).toEqual(0);
    a.push(1);
    a.push(2);
    expect(a.length).toEqual(2);
  });
  it('canot reset `length`', () => {
    var a = stack();
    function test() {
      a.length = 2;
    }
    expect(test).toThrow(TypeError);
  })
  it('can clear stack', () => {
    var a = stack();
    a.push(1)
    a.push(2)
    a.clear()
    expect(a.length).toBe(0);
  })
  it('can get correct top element', () => {
    var a = stack();
    a.push(1);
    expect(a.getTop()).toBe(1);
  })
})

describe('Chrome', () => {
  it('will return `null` if no page', () => {
    let chromeExample = Chrome();
    expect(chromeExample.showPage()).toBe(null);
  })
  it('works when only open one page', () => {
    let chromeExample = Chrome();
    chromeExample.pushPage('google')
    expect(chromeExample.showPage()).toBe('google');
    expect(chromeExample.goAhead()).toBe(false);
    expect(chromeExample.goBack()).toBe(false);
  })
  it('works when open mutil pages', () => {
    let chromeExample = Chrome();
    chromeExample.pushPage('page1.com')
    chromeExample.pushPage('page2.com')
    chromeExample.pushPage('page3.com')
    expect(chromeExample.showPage()).toBe('page3.com')

    chromeExample.goBack()
    expect(chromeExample.showPage()).toBe('page2.com')
    chromeExample.goBack()
    expect(chromeExample.showPage()).toBe('page1.com')

    chromeExample.goAhead()
    expect(chromeExample.showPage()).toBe('page2.com')

    chromeExample.pushPage('page4.com')
    expect(chromeExample.goAhead()).toBe(false)
  })
})