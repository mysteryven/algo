import { circleQueue } from './queue';

describe('circle queue', () => {
  it('single dequeue and enqueue without error', () => {
    const queueExample = circleQueue(6);
    expect(queueExample.deQueue()).toBe(false);
    queueExample.enQueue(1);
    expect(queueExample.deQueue()).toBe(1);
  })
  it('when is full, enqueue will return false ', () => {
    const queueExample = circleQueue(2);
    queueExample.enQueue(1);

    const lastEnQueue = queueExample.enQueue(1);
    expect(lastEnQueue).toBe(true);

    const illegalEnQueue = queueExample.enQueue(1);
    expect(illegalEnQueue).toBe(false);
  })
  it('when is empty, dequeue will return false ', () => {
    const queueExample = circleQueue(2);
    expect(queueExample.deQueue()).toBe(false);
  })
  it('can enqueue  after dequeue', () => {
    const queueExample = circleQueue(3);
    queueExample.enQueue(1)
    queueExample.enQueue(2)
    queueExample.enQueue(3)
    expect(queueExample.deQueue()).toBe(1);
    expect(queueExample.deQueue()).toBe(2);

    queueExample.enQueue('a')
    queueExample.enQueue('b')
    expect(queueExample.deQueue()).toBe(3);
    expect(queueExample.deQueue()).toBe('a');
    expect(queueExample.deQueue()).toBe('b');
    expect(queueExample.deQueue()).toBe(false);
  })
})