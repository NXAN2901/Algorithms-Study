/**
  A prime number is called a special prime if we remove the right digits one after another, we still get the primes.

  For example 2333 is a special prime number because when we remove the right digits one after another, we get the numbers: [233, 23, 2] are all primes.

  Find all special prime numbers less than or equal to n. Results are returned in ascending order

  Example:
    With n = 10 then findSpecialPrime(n) = [2, 3, 5, 7].
    With n = 100 then findSpecialPrime(n) = [2, 3, 5, 7, 23, 29, 31, 37, 53, 59, 71, 73, 79].

  INPUT/OUTPUT:

  [TIME EXECUTION] 0.5s for C++, 3s for Java và C#, 4s for Python, GO and Js.
  [INPUT] Integer n
  0 <= n <= 10^7

  [OUTPUT] Int Array
 */

let result = []
function findSpecialPrime(n) {
  result = []
  if (n >= 2) {
    result.push(2)
  }
  for (let i = 3; i <= n; i += 2) {
    if (isSpecialPrime(i)) {
      result.push(i)
    }
  }
  return result
}

function isPrime(n) {
  if (n % 2 == 0) {
    return false
  }

  const sqrtN = Math.sqrt(n)
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}

function isSpecialPrime(n) {
  const length = n.toString().length - 1
  for (let i = length; i >= 0; i--) {
    const smallerValue = Math.floor(n / Math.pow(10, i))
    
    if (smallerValue == 1) {
      return false
    }

    if (result.includes(smallerValue)) {
      continue
    }

    const isCurrentPrime = isPrime(smallerValue)
    if (!isCurrentPrime) {
      return false
    }

  }
  return true
}

module.exports = findSpecialPrime