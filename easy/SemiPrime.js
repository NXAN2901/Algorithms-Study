function detachedSemiPrime(n) {
  if (n <= 0) {
      return [-1]
  }
  if (isPrime(n)) {
      return [-1]
  }
  const sqrtN = Math.floor(Math.sqrt(n))
  for (let i = 2; i <= sqrtN; i++) {
      if (n % i == 0 && isPrime(i) && isPrime(n / i)) {
          return [i , n/i]
      }
  }
  return [-1]
}

function isPrime(n) {
  if (n < 2) {
      return false
  }
  if (n == 2) {
      return true
  }
  if (n % 2 == 0) {
      return false
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
          return false
      }
  }
  return true
}

module.exports = detachedSemiPrime;