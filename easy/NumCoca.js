/**
 * An loves to drink Coke. On the way home from school he met a store that had a program to exchange bottles for a whole bottle. But he can only afford "x" bottles of coca.
 * Please help An calculate from those original "x" bottles, how many bottles of coca he can get.
 * 
 * Example:
 *  - With x = 15, y = 4 then numCoca(x, y) = 19. 
 * 
 *    Because initially An had 15 bottles of coca. After drinking all those 15 bottles, An was able to exchange 3 new Coke bottles and he had 3 remaining bottles. 
 *    Then An exchanged another Coke bottle and had 2 leftover bottles. In the end, An could not exchange any more. The total is 15 + 3 + 1 = 19.
 * 
 *  - With x = 2, y = 3 then numCoca(x, y) = 2
 * 
 *  Input/ Output:
 *    [Rumtime]: 0.1s with C++, 0.6s with C# and Java, 0.8s with Python, GO and Javascript
 *    [Input]: Integer
 *      1 <= x <= 1000
 *      2 <= y <= 1000
 *
 *    [Output]: Integer
 *
 */

function numCoca(x,y){
  let current = x
  let redundant = 0
  if (current < y) {
      return current
  }

  let result = 0

  while(current >= y) {
      redundant = current % y
      result += current - redundant
      current = (current - redundant) / y + redundant
  }
  return result + current
}

module.exports = numCoca