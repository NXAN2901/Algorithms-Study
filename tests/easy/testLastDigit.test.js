const { performance } = require('perf_hooks');
const lastDigit = require('../../easy/LastDigit');

test(`
  Input: a = 9, b = 0 
  Expected output: 1
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = lastDigit(9, 0)
  const endTime = performance.now()
  expect(result).toEqual(1)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: a = 9, b = 7 
  Expected output: 9
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = lastDigit(9, 7)
  const endTime = performance.now()
  expect(result).toEqual(9)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: a = 8, b = 1 
  Expected output: 8
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = lastDigit(8, 1)
  const endTime = performance.now()
  expect(result).toEqual(8)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: a = 8, b = 2 
  Expected output: 4
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = lastDigit(8, 2)
  const endTime = performance.now()
  expect(result).toEqual(4)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: a = 10, b = 100000000000
  Expected output: 0
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = lastDigit(10, 100000000000)
  const endTime = performance.now()
  expect(result).toEqual(0)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: a = 19975, b = 3814709324
  Expected output: 5
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = lastDigit(19975, 3814709324)
  const endTime = performance.now()
  expect(result).toEqual(5)
  expect(endTime - startTime).toBeLessThan(4000)
});