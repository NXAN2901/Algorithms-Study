/** 
 * Give the File Array contain the names of files available on the Desktop and Memory Array is the size of those files.
 * When user selects "Sort By Size", Computer will automatically arrange the the files displayed on the Desktop respectively from the largest to the smallest file.
 * When choosing "Sort By Size" again, Computer will automatically sort by order from smallest to largest.
 * 
 * Give n is the numer of times the user chose "Sort By Size"
 * 
 * Return an Array containing the sort order of files:
 *  - If the files are of equal size, the file with the first letter has a larger number in ASCII is consider larger
 *  - If the file size is invalid or the array contains an invalid file size, an Empty Array is returned
 * 
 * Example:
 *  - With  File = ["ABC","Word","Chess"] 
 *          Memory = [302,123,400]
 *          n = 1
 *    Then Desktop_Sorted(File,Memory,n) = ["Chess","ABC","Word"]
 * 
 * Input/Output:
 *  [Time Execution]:  0,5s for C++, 3s for Java, 4s for Python, Go, Javascript
 *  [INPUT]: Array of String: File,
 *           Array of Integer: Memory
 *           Integer: n
 * 
 *  [OUTPUT]: Array of String
 */


function desktopSorted(File, Memory, n) {
  if (
    !File ||
    !Memory ||
    File.length != Memory.length ||
    File.length <= 0 ||
    n < 1
  ) {
    return [];
  }
  const isAscending = n % 2 != 0;
  return quickSort(Memory, File, isAscending);
}

function quickSort(arr, arr2, isAscending) {
  if (arr2.length < 2) {
    return arr2;
  }
  const pivotPosition = Math.floor(arr.length / 2);
  const pivot = arr[pivotPosition];
  if (pivot <= 0) {
    return [];
  }

  const pivotName = arr2[pivotPosition];

  const less = [];
  const lessName = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      return [];
    }
    if (
      arr[i] < pivot ||
      (i != pivotPosition &&
        arr[i] == pivot &&
        !isAsciiLarger(arr2[i], pivotName))
    ) {
      less.push(arr[i]);
      lessName.push(arr2[i]);
    }
  }

  const large = [];
  const largeName = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] > pivot ||
      (i != pivotPosition &&
        arr[i] == pivot &&
        isAsciiLarger(arr2[i], pivotName))
    ) {
      large.push(arr[i]);
      largeName.push(arr2[i]);
    }
  }
  if (isAscending) {
    return [].concat(
      quickSort(large, largeName, isAscending),
      [pivotName],
      quickSort(less, lessName, isAscending)
    );
  }
  return [].concat(
    quickSort(less, lessName, isAscending),
    [pivotName],
    quickSort(large, largeName, isAscending)
  );
}

function isAsciiLarger(str1, str2) {
  if (str1.includes(str2) || str2.includes(str1)) {
    return str1.length < str2.length;
  }
  let length = str1.length;
  const isLonger = length >= str2.length;
  if (!isLonger) {
    length = str2.length;
  }

  for (let i = 0; i < length; i++) {
    if (str1.charCodeAt(i) < str2.charCodeAt(i)) {
      return false;
    }
  }
  return true;
}

module.exports = desktopSorted
