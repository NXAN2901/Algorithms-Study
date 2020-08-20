const { performance } = require("perf_hooks");
const detachedSemiPrime = require("../../easy/SemiPrime");

describe("Semi Prime Test", () => {
  test(`
    Input: 6
    Expect output: [2,3]
    Execute time limit below :800 ms
  `, () => {
    const startTime = performance.now();
    const result = detachedSemiPrime(6);
    const endTime = performance.now();
    expect(result).toStrictEqual([2, 3]);
    expect(endTime - startTime).toBeLessThan(800);
  });

  test(`
    Input: 12
    Expect output: [-1]
    Execute time limit below :800 ms
  `, () => {
    const startTime = performance.now();
    const result = detachedSemiPrime(12);
    const endTime = performance.now();
    expect(result).toStrictEqual([-1]);
    expect(endTime - startTime).toBeLessThan(800);
  });

  test(`
    Input: 9
    Expect output: [3,3]
    Execute time limit below :800 ms
  `, () => {
    const startTime = performance.now();
    const result = detachedSemiPrime(9);
    const endTime = performance.now();
    expect(result).toStrictEqual([3, 3]);
    expect(endTime - startTime).toBeLessThan(800);
  });

  test(`
    Input: 21
    Expect output: [3,7]
    Execute time limit below :800 ms
  `, () => {
    const startTime = performance.now();
    const result = detachedSemiPrime(21);
    const endTime = performance.now();
    expect(result).toStrictEqual([3, 7]);
    expect(endTime - startTime).toBeLessThan(800);
  });

  test(`
    Input: 932
    Expect output: [-1]
    Execute time limit below :800 ms
  `, () => {
    const startTime = performance.now();
    const result = detachedSemiPrime(932);
    const endTime = performance.now();
    expect(result).toStrictEqual([-1]);
    expect(endTime - startTime).toBeLessThan(800);
  });

  test(`
    Input: 27
    Expect output: [-1]
    Execute time limit below :800 ms
  `, () => {
    const startTime = performance.now();
    const result = detachedSemiPrime(27);
    const endTime = performance.now();
    expect(result).toStrictEqual([-1]);
    expect(endTime - startTime).toBeLessThan(800);
  });

  test(`
    Input: 22
    Expect output: [2,11]
    Execute time limit below :800 ms
  `, () => {
    const startTime = performance.now();
    const result = detachedSemiPrime(22);
    const endTime = performance.now();
    expect(result).toStrictEqual([2, 11]);
    expect(endTime - startTime).toBeLessThan(800);
  });

  test(`
    Input: -1
    Expect output: [-1]
    Execute time limit below :800 ms
  `, () => {
    const startTime = performance.now();
    const result = detachedSemiPrime(-1);
    const endTime = performance.now();
    expect(result).toStrictEqual([-1]);
    expect(endTime - startTime).toBeLessThan(800);
  });

  test(`
    Input: 1
    Expect output: [-1]
    Execute time limit below :800 ms
  `, () => {
    const startTime = performance.now();
    const result = detachedSemiPrime(1);
    const endTime = performance.now();
    expect(result).toStrictEqual([-1]);
    expect(endTime - startTime).toBeLessThan(800);
  });

  test(`
    Input: 5
    Expect output: [-1]
    Execute time limit below :800 ms
  `, () => {
    const startTime = performance.now();
    const result = detachedSemiPrime(5);
    const endTime = performance.now();
    expect(result).toStrictEqual([-1]);
    expect(endTime - startTime).toBeLessThan(800);
  });
  
});
