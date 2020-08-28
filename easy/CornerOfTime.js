/**
 * Caculate the angle between the hour and minute hands (0 <= α <= 180)
 * Please caculater the angle at the time h hours and m minutes. (Round the result to the nearest bigger integer)
 * 
 * Example:
 *  With h = 3, m = 15 then corner_of_time = 8
 *  With h = 18, m = 0 then corner_of_time = 180
 * 
 * Input/ Output:
 * 
 *  [Rumtime]: 0.1s with C++, 0.6s with C# and Java, 0.8s with Python, GO and Javascript
 * 
 *  [Input]: Integer
 *    0 <= h <= 23
 *    0 <= m <= 59
 * 
 *  [Output]: Integer
 * 
 */

function cornerOfTime(h,m){
  // Validate input if needed
  let actualHour = h
  if ( actualHour >= 12) {
      actualHour = actualHour % 12
  }

  // Hour hand moves 360 degree in 12 hours(or 0.5 degree in 1 minute)
  const hourAngel = 0.5 * (actualHour * 60 + m)

  // The minute hand moves 360 degree in 60 minute(or 6 degree in one minute)
  const minuteAngel = 6 * m

  const diffAngel = Math.abs(hourAngel - minuteAngel)

  // Because angel from 0 - 180 => smaller angle of two possible angles
  const actualAngel = Math.min(360 - diffAngel, diffAngel)

  // Return rounded angel
  return Math.ceil(actualAngel)

}

module.exports = cornerOfTime