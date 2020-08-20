/**
  Given a string s of words separated by spaces (""). Add brackets according to the following rule:

  - The first brace contains all words except the last.
  - The second parenthesis in the first bracket exclude the first word in the first bracket.
  - The third parenthesis is in the second bracket, exclude the last word in the second bracket.
  - The 4th parenthesis is in the 3rd bracket, exclude the first word in the 3rd bracket.
  - The 5th parenthesis is in the 4th bracket, exclude the last word in the 4th bracket.
  ...

  Example:

  For s = "a b c" then quirkyBrackets (s) = "(a(b))c"
  For s = "Hello World" then quirkyBrackets (s) = "(Hello)World"
  For s = "a b c d" then quirkyBrackets (s) = "(a((b)c))d"

  INPUT/OUTPUT:

  [Time Execution] 0.1s for C, 0.6s for Java and C #, 0.8s for Python, Go and JavaScript.

  [Input] string
  0 <= s.length <= 10^4

  [Output] string
 */

var bracketStart = '('
var bracketEnd = ')'

function quirkyBrackets(s){
    const arrChacracters = s.split(' ')
    const result = calculateBracket(arrChacracters)
    return result
}

// function calculateBracket(charArr) {
//   if (charArr.length == 0) {
//     return ''
//   }

//   if (charArr.length == 1) {
//     return `${bracketStart}${charArr[0]}${bracketEnd}`
//   }

//   let halfLength = 0
//   let centerIndex = -1
//   if (charArr.length % 2 == 0) {
//     halfLength = charArr.length / 2
//   } else {
//     halfLength = (charArr.length - 1) / 2
//     centerIndex = halfLength
//   }
//   for (i = 0; i < halfLength; i++) {
//     if (i == 0) {
//       charArr[i] = `${bracketStart}${charArr[i]}`
//     } else {
//       charArr[i] = `${bracketStart}${bracketStart}${charArr[i]}`
//     }

//     if (i < halfLength - 1) {
//       charArr[charArr.length - 1 - i] = `${bracketEnd}${bracketEnd}${charArr[charArr.length - 1 - i]}`
//     } else {
//       charArr[charArr.length - 1 - i] = `${bracketEnd}${charArr[charArr.length - 1 - i]}`
//     }
//   }
//   if (centerIndex != -1) {
//     charArr[centerIndex] = `${bracketStart}${charArr[centerIndex]}${bracketEnd}`
//   }
//   return charArr.join('')
// }

function calculateBracket(charArr, startIndex = 0, endIndex = charArr.length - 1, times = 0) {
    let start = `${charArr[startIndex]}`
    if ((endIndex - startIndex) == 0) {
        return start
    }
    let end = `${charArr[endIndex]}`
    if (times % 2 == 0) {
        return bracketStart + calculateBracket(charArr, startIndex, endIndex - 1, times + 1) + bracketEnd + end
    }
    return start + bracketStart + calculateBracket(charArr, startIndex + 1, endIndex, times + 1) + bracketEnd
}

module.exports = quirkyBrackets;