function findDifferent(str_1,str_2){
  const totalString = str_1.concat(str_2)
  const arr = sortArrByCharCode(totalString.split(''))

  const diffObj = {}
  for (item of arr) {
      if (diffObj.hasOwnProperty(item)) {
          diffObj[item] = diffObj[item] + 1
          continue
      }
      diffObj[item] = 1
  }

  let diffStr1 = ''
  let diffStr2 = ''

  for (key in diffObj) {
    if (diffObj[key] >= 2) {
      if (!str_1.includes(key)) {
        diffStr2 += key
        continue
      }

      if (!str_2.includes(key)) {
        diffStr1 += key
        continue
      }

      continue
    }
    if (str_1.includes(key) ) {
      diffStr1 += key
      continue
    }
    diffStr2 += key
  }
  
  const result = []
  if (diffStr1.length != 0) {
    result.push(diffStr1)
  }

  if (diffStr2.length != 0) {
    result.push(diffStr2)
  }
  if (result.length == 0) {
    return ['-1']
  }
  return result
}

function sortArrByCharCode(arr) {
  if (arr.length < 2) {
    return arr
  }
  const pivotPosition = Math.floor(arr.length / 2)
  const pivot = arr[pivotPosition]

  const lessArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) <= pivot.charCodeAt(0) && i != pivotPosition) {
      lessArr.push(arr[i])
    }
  }

  const largeArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) > pivot.charCodeAt(0)) {
      largeArr.push(arr[i])
    }
  }

  return [].concat(sortArrByCharCode(lessArr), [pivot], sortArrByCharCode(largeArr))
}

// console.log(findDifferent("hGuDiapEAlpvicd","jkOJWwhPPuXHmqy"))
console.log(findDifferent("Z1z","1Zz"))
                          //  ADEGacdhilpuv