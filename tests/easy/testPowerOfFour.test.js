const { performance } = require('perf_hooks');
const isPowerOfFour = require('../../easy/PowerOfFour');


test(`
  Input: 4
  Expected output: true
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = isPowerOfFour(4)
  const endTime = performance.now()
  expect(result).toEqual(true)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: 4
  Expected output: true
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = isPowerOfFour(4)
  const endTime = performance.now()
  expect(result).toEqual(true)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: 5
  Expected output: false
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = isPowerOfFour(5)
  const endTime = performance.now()
  expect(result).toEqual(false)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: 6
  Expected output: true
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = isPowerOfFour(6)
  const endTime = performance.now()
  expect(result).toEqual(false)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: 16
  Expected output: true
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = isPowerOfFour(16)
  const endTime = performance.now()
  expect(result).toEqual(true)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: 24
  Expected output: false
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = isPowerOfFour(24)
  const endTime = performance.now()
  expect(result).toEqual(false)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: 50
  Expected output: false
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = isPowerOfFour(50)
  const endTime = performance.now()
  expect(result).toEqual(false)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: 1099511627776
  Expected output: true
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = isPowerOfFour(1099511627776)
  const endTime = performance.now()
  expect(result).toEqual(true)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: 1048576
  Expected output: true
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = isPowerOfFour(1048576)
  const endTime = performance.now()
  expect(result).toEqual(true)
  expect(endTime - startTime).toBeLessThan(4000)
});