const { performance } = require("perf_hooks");
const prefixOfWord = require("../../easy/PrefixOfWord");

test(`
  Input: s = "I am a developer"
         p = "a" 

  Expect output: 2
  Execute time limit below : 4000 ms
`, () => {
  const startTime = performance.now();
  const result = prefixOfWord("I am a developer", "a");
  const endTime = performance.now();
  expect(result).toEqual(2);
  expect(endTime - startTime).toBeLessThan(4000);
});

test(`
  Input: s = "CoderToDev"
         p = "Shanghalk" 

  Expect output: -1
  Execute time limit below : 4000 ms
`, () => {
  const startTime = performance.now();
  const result = prefixOfWord("CoderToDev", "Shanghalk");
  const endTime = performance.now();
  expect(result).toEqual(-1);
  expect(endTime - startTime).toBeLessThan(4000);
});

test(`
  Input: s = "codelearn"
         p = "code" 

  Expect output: 1
  Execute time limit below : 4000 ms
`, () => {
  const startTime = performance.now();
  const result = prefixOfWord("codelearn", "code");
  const endTime = performance.now();
  expect(result).toEqual(1);
  expect(endTime - startTime).toBeLessThan(4000);
});

test(`
  Input: s = "a b c d e f g h"
         p = "d" 

  Expect output: 4
  Execute time limit below : 4000 ms
`, () => {
  const startTime = performance.now();
  const result = prefixOfWord("a b c d e f g h", "d");
  const endTime = performance.now();
  expect(result).toEqual(4);
  expect(endTime - startTime).toBeLessThan(4000);
});

test(`
  Input: s = "oY JpyG rFltJ TW1xH qAiJ"
         p = "a" 

  Expect output: -1
  Execute time limit below : 4000 ms
`, () => {
  const startTime = performance.now();
  const result = prefixOfWord("oY JpyG rFltJ TW1xH qAiJ", "a");
  const endTime = performance.now();
  expect(result).toEqual(-1);
  expect(endTime - startTime).toBeLessThan(4000);
});
