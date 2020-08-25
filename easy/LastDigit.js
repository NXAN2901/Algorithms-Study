/**
 * Given 2 non-negative integers a and b. Write a program that will return the end digit of a^b.
 * 
 * Example:
 *  With a = 9, b = 7 => lastDigit = 9. Because 9^7 = 4782969 => Last Digi is 9
 *  With a = 4, b = 1 => lastDigit = 4
 * 
 * [INPUT/ OUTPUT]:
 *  
 * [Time Execution]: Below 0.5s for C++, 3s for Java and C#, 4s for Python, Go and Javascript
 * [INPUT] :  Integer a, b
 *            0 ≤ a,b ≤ int.Max
 *
 * [OUTPUT]: Integer (Last Digit of a^b)
 */

// https://brilliant.org/wiki/finding-the-last-digit-of-a-power/
const matrixLastDigit = {
  '2' : [2, 4, 8, 6],
  '3' : [3, 9, 7, 1],
  '4' : [4, 6, 4, 6],
  '7' : [7, 9, 3, 1],
  '8' : [8, 4, 2, 6],
  '9' : [9, 1, 9, 1],
}

function lastDigit(a,b){
  if (b == 0) {
      return 1
  }
  let currentLastDigit = a % 10
  if (currentLastDigit == 0 || currentLastDigit == 1 || currentLastDigit == 5 || currentLastDigit == 6) {
      return currentLastDigit
  }
  const currentMatrixLastDigit = matrixLastDigit[`${currentLastDigit}`]
  const index = b % currentMatrixLastDigit.length
  if (index == 0) {
      return currentMatrixLastDigit[index]
  }
  return currentMatrixLastDigit[index - 1]
}

module.exports = lastDigit