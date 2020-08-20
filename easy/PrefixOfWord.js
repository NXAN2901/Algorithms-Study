/**
Given a string S, containing words separated by a space. 
For the string P, calculate the position (starting at 1) of the word in S, where P is its prefix. 
If more than one match is found, return the smallest position. 
If not, return -1

Example:
 - With s = "I am a developer", p = "a", then result of prefixOfWord(s,p) = 2
 Explain: Because "a" is prefix of "am", so result is 2

INPUT/OUTPUT:
  - [Time Execution]:  0.5s for C++, 3s for Java và C#, 4s for Python, Go and JavaScript.
  - [INPUT]: string s with 0 ≤ s.length ≤ 10^6
  - [INPUT]: string p with 0 ≤ p.length ≤ 100
  - [OUTPUT]: Integer

*/

function prefixOfWord(s,p){
  const charArr = s.split(' ')
  for (let i = 0; i < charArr.length; i++) {
      const current = charArr[i]
      if (current.startsWith(p)) {
          return (i + 1)
      }
  }
  return -1
}

// function prefixOfWord(s,p){
//     const acceptedCharArr = p.split('')

//     let matching = false
//     let currentIndex = 0
//     let currentAcceptIndex = 0
//     let isPrefix = true

//     console.log({ acceptedCharArr })

//     for (let i = 0; i < s.length; i++) {
//         const currentChar = s.charAt(i)
//         if (currentChar === ' ') {
//             currentIndex++
//             isPrefix = true
//             continue
//         }

//         if (!isPrefix) {
//             continue
//         }
//         console.log({ isPrefix, currentIndex })

//         if (isPrefix) {
//             console.log({ currentAcceptIndex, currentChar })
//             if (p[currentAcceptIndex] === currentChar) {
//                 if (currentAcceptIndex === acceptedCharArr.length - 1) {
//                     return currentIndex + 1
//                 }
//                 currentAcceptIndex++
//                 continue
//             }
//             currentAcceptIndex = 0
//             isPrefix = false
//         }
      
//     }

//     return -1

// }

module.exports = prefixOfWord
