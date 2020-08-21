const { performance } = require('perf_hooks');
const findSpecialPrime = require("../../medium/SpecialPrime")

test(`
  Input: 1
  Output: []
  Execute Time Limit: 4000
`, () => {
  const start = performance.now()
  const result = findSpecialPrime(1)
  const end = performance.now()
  expect(result).toStrictEqual([])
  expect(end - start).toBeLessThan(4000)
})

test(`
  Input: 2
  Output: []
  Execute Time Limit: 4000
`, () => {
  const start = performance.now()
  const result = findSpecialPrime(2)
  const end = performance.now()
  expect(result).toStrictEqual([2])
  expect(end - start).toBeLessThan(4000)
})

test(`
  Input: 100
  Output: [2, 3, 5, 7, 23, 29, 31, 37, 53, 59, 71, 73, 79]
  Execute Time Limit: 4000
`, () => {
  const start = performance.now()
  const result = findSpecialPrime(100)
  const end = performance.now()
  expect(result).toStrictEqual([2, 3, 5, 7, 23, 29, 31, 37, 53, 59, 71, 73, 79])
  expect(end - start).toBeLessThan(4000)
})

test(`
  Input: 10
  Output: [2, 3, 5, 7]
  Execute Time Limit: 4000
`, () => {
  const start = performance.now()
  const result = findSpecialPrime(10)
  const end = performance.now()
  expect(result).toStrictEqual([2, 3, 5, 7])
  expect(end - start).toBeLessThan(4000)
})

test(`
  Input: 1301
  Output: [2,3,5,7,23,29,31,37,53,59,71,73,79,233,239,293,311,313,317,373,379,593,599,719,733,739,797]
  Execute Time Limit: 4000
`, () => {
  const start = performance.now()
  const result = findSpecialPrime(1301)
  const end = performance.now()
  expect(result).toStrictEqual([2,3,5,7,23,29,31,37,53,59,71,73,79,233,239,293,311,313,317,373,379,593,599,719,733,739,797])
  expect(end - start).toBeLessThan(4000)
})

test(`
  Input: 2003
  Output: [2,3,5,7,23,29,31,37,53,59,71,73,79,233,239,293,311,313,317,373,379,593,599,719,733,739,797]
  Execute Time Limit: 4000
`, () => {
  const start = performance.now()
  const result = findSpecialPrime(2003)
  const end = performance.now()
  expect(result).toStrictEqual([2,3,5,7,23,29,31,37,53,59,71,73,79,233,239,293,311,313,317,373,379,593,599,719,733,739,797])
  expect(end - start).toBeLessThan(4000)
})


test(`
  Input: 9002
  Output: [2,3,5,7,23,29,31,37,53,59,71,73,79,233,239,293,311,313,317,373,379,593,599,719,733,739,797,2333,2339,2393,2399,2939,3119,3137,3733,3739,3793,3797,5939,7193,7331,7333,7393]
  Execute Time Limit: 4000
`, () => {
  const start = performance.now()
  const result = findSpecialPrime(9002)
  const end = performance.now()
  expect(result).toStrictEqual([2,3,5,7,23,29,31,37,53,59,71,73,79,233,239,293,311,313,317,373,379,593,599,719,733,739,797,2333,2339,2393,2399,2939,3119,3137,3733,3739,3793,3797,5939,7193,7331,7333,7393])
  expect(end - start).toBeLessThan(4000)
})


test(`
  Input: 10^7
  Output: Array length is 78
  Execute Time Limit: 4000
`, () => {
  const start = performance.now()
  const result = findSpecialPrime(Math.pow(10, 7))
  const end = performance.now()
  expect(result.length).toEqual(78)
  expect(end - start).toBeLessThan(4000)
})