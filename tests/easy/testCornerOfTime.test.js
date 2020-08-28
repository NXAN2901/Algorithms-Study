const { performance } = require('perf_hooks');
const cornerOfTime = require('../../easy/CornerOfTime');

test(`
  Input: h = 3, m = 15 
  Expected output: 8
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = cornerOfTime(3, 15)
  const endTime = performance.now()
  expect(result).toEqual(8)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: h = 18, m = 0 
  Expected output: 180
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = cornerOfTime(18, 0)
  const endTime = performance.now()
  expect(result).toEqual(180)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: h = 0, m = 0 
  Expected output: 0
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = cornerOfTime(0, 0)
  const endTime = performance.now()
  expect(result).toEqual(0)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: h = 23, m = 30 
  Expected output: 165
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = cornerOfTime(23, 30)
  const endTime = performance.now()
  expect(result).toEqual(165)
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: h = 17, m = 55 
  Expected output: 153
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = cornerOfTime(17, 55)
  const endTime = performance.now()
  expect(result).toEqual(153)
  expect(endTime - startTime).toBeLessThan(4000)
});