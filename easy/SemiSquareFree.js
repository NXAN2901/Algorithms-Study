function isSemiSquareFree(n){
  if (n < 2) {
      return false
  }

  if (isPrime(n)) {
    return true
  }

//   let pow = 0
//   let currentVal = n
//   while (currentVal % 2 == 0) {
//       pow++
//       currentVal = currentVal / 2
//   }
//   if (pow > 0 && pow % 2 == 0) {
//       return false
//   }
//   if (currentVal == 1) {
//       return true
//   }
  
  return check(n, 2)
}

function check(n, begin) {
  if (begin > n) {
      return false
  }
  
  if (!isPrime(begin)) {
      return check(n, begin + 2)
  }

  let currentVal = n
  let pow = 0
  while (currentVal % begin == 0) {
      pow++
      currentVal = currentVal / begin
  }

  if (pow > 0 && pow % 2 == 0) {
      return false
  }

  if (currentVal == 1) {
      return true
  }

  if (begin == 2) {
    return check(currentVal, 3)      
  }

  return check(currentVal, begin + 2)
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

  const sqrtN = Math.floor(Math.sqrt(n))

  for (let i = 3; i <= sqrtN; i++) {
      if (n % i == 0) {
          return false
      }
  }
  return true
}
// console.log(isPrime(131))
console.log(isSemiSquareFree(110))