const { performance } = require('perf_hooks');
const desktopSorted = require('../../easy/DestopSort');

test(`
  Input: ["ABC","Facebook","English"],[1,2,3],1
  Expected output: ["English","Facebook","ABC"]
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = desktopSorted(["ABC","Facebook","English"],[0,2,3],1)
  const endTime = performance.now()
  expect(result).toStrictEqual([])
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: ["ABC","Facebook","English"],[1,2,3],1
  Expected output: ["English","Facebook","ABC"]
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = desktopSorted(["ABC","Facebook","English"],[1,2,3],1)
  const endTime = performance.now()
  expect(result).toStrictEqual(["English","Facebook","ABC"])
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: ["Sudoku","IC3","Calculator","Television","Lamp"], [3,8,9,2,1], 1
  Expected output: ["Calculator","IC3","Sudoku","Television","Lamp"]
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = desktopSorted(["Sudoku","IC3","Calculator","Television","Lamp"], [3,8,9,2,1], 1)
  const endTime = performance.now()
  expect(result).toStrictEqual(["Calculator","IC3","Sudoku","Television","Lamp"])
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: ["a","b","c","d","e","f","g"],[100,200,300,12,14,600,1],2
  Expected output: ['g', 'd', 'e', 'a', 'b', 'c', 'f']
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = desktopSorted(["a","b","c","d","e","f","g"], [100,200,300,12,14,600,1], 2)
  const endTime = performance.now()
  expect(result).toStrictEqual(['g', 'd', 'e', 'a', 'b', 'c', 'f'])
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: ["a","b","c","d","e","f","g","h","i","k"], [68,77,32,1,900,345,234,123,456,2], 2
  Expected output: ['g', 'd', 'e', 'a', 'b', 'c', 'f']
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = desktopSorted(["a","b","c","d","e","f","g","h","i","k"], [68,77,32,1,900,345,234,123,456,2], 2)
  const endTime = performance.now()
  expect(result).toStrictEqual(['d', 'k', 'c', 'a', 'b', 'h', 'g', 'f', 'i', 'e'])
  expect(endTime - startTime).toBeLessThan(4000)
});

test(`
  Input: ["IIG","WPSOffice","Learn"], [1000,435,-2], 3
  Expected output: ['g', 'd', 'e', 'a', 'b', 'c', 'f']
  Execute time limit: 4000 ms
`, () => {
  const startTime = performance.now()
  const result = desktopSorted(["IIG","WPSOffice","Learn"],[1000,435,-2],3)
  const endTime = performance.now()
  expect(result).toStrictEqual([])
  expect(endTime - startTime).toBeLessThan(4000)
});