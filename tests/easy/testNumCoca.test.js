const { performance } = require('perf_hooks');
const numCoca = require('../../easy/NumCoca');

test(`
  Input: x = 2, y = 3 
  Expected output: 2
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = numCoca(2, 3)
  const endTime = performance.now()
  expect(result).toEqual(2)
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: x = 9, y = 3 
  Expected output: 13
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = numCoca(9, 3)
  const endTime = performance.now()
  expect(result).toEqual(13)
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: x = 15, y = 4 
  Expected output: 19
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = numCoca(15, 4)
  const endTime = performance.now()
  expect(result).toEqual(19)
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: x = 384, y = 8 
  Expected output: 438
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = numCoca(384, 8)
  const endTime = performance.now()
  expect(result).toEqual(438)
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: x = 778, y = 7 
  Expected output: 907
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = numCoca(778, 7)
  const endTime = performance.now()
  expect(result).toEqual(907)
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: x = 794, y = 7 
  Expected output: 926
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = numCoca(794, 7)
  const endTime = performance.now()
  expect(result).toEqual(926)
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: x = 387, y = 4 
  Expected output: 515
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = numCoca(387, 4)
  const endTime = performance.now()
  expect(result).toEqual(515)
  expect(endTime - startTime).toBeLessThan(800)
});