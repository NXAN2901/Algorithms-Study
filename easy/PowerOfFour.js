/**
Given a positive integer n (n could be very big), you task is determine if that number is a power of 4.

Example

For n=4, the output should be isPowerOfFour(4) = true.
4 is equal to 4 to the power of 1 so we return true.
Input/Output

[execution time limit] 0,5 seconds

[input] long n
a very big number

[output] int
Determine whether n is a power of 4.

 */
function isPowerOfFour(n){
  let currentValue = 4
  
  while(currentValue < n) {
      currentValue *= 4
  }
  return currentValue == n
}

module.exports = isPowerOfFour