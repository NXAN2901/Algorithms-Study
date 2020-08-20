const { performance } = require('perf_hooks');
const quirkyBrackets = require('../../easy/QuirkyBrackets');

test(`
  Input: 'a b c d'
  Expected output: '(a((b)c))d'
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = quirkyBrackets('a b c d')
  const endTime = performance.now()
  expect(result).toBe('(a((b)c))d');
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: 'Hello World'
  Expected output: '(Hello)World'
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = quirkyBrackets('Hello World')
  const endTime = performance.now()
  expect(result).toBe('(Hello)World');
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: 'a b c'
  Expected output: '(a(b))c'
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = quirkyBrackets('a b c')
  const endTime = performance.now()
  expect(result).toBe('(a(b))c');
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: 'a b c d e'
  Expected output:'(a((b(c))d))e'
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = quirkyBrackets('a b c d e')
  const endTime = performance.now()
  expect(result).toBe('(a((b(c))d))e');
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: 'adjsd kjndjs kiwsnd kansis 1223'
  Expected output: '(adjsd((kjndjs(kiwsnd))kansis))1223'
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = quirkyBrackets('adjsd kjndjs kiwsnd kansis 1223')
  const endTime = performance.now()
  expect(result).toBe('(adjsd((kjndjs(kiwsnd))kansis))1223');
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: 'unfv xsmb 324839 iscndjs isms iwjd udn ued uec unss d'
  Expected output: '(unfv((xsmb((324839((iscndjs((isms(iwjd))udn))ued))uec))unss))d'
  Execute time limit: 800 ms
`, () => {
  const startTime = performance.now()
  const result = quirkyBrackets('unfv xsmb 324839 iscndjs isms iwjd udn ued uec unss d')
  const endTime = performance.now()
  expect(result).toBe('(unfv((xsmb((324839((iscndjs((isms(iwjd))udn))ued))uec))unss))d');
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: ''
  Expect output: ''
  Execute time limit below :800 ms
`, () => {
  const startTime = performance.now()
  const result = quirkyBrackets('')
  const endTime = performance.now()
  expect(result).toBe('')
  expect(endTime - startTime).toBeLessThan(800)
});

test(`
  Input: 'a'
  Expect output: 'a'
  Execute time limit below :800 ms
`, () => {
  const startTime = performance.now()
  const result = quirkyBrackets('a')
  const endTime = performance.now()
  expect(result).toBe('a')
  expect(endTime - startTime).toBeLessThan(800)
});