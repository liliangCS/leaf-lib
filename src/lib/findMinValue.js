/**
 * 输入一个number数组，得到一个数组子项最小值
 * @param {number[]} arr
 * @return {number}
 * @example
 * 
 * findMinValue([1, 2, 3, 4]) => 1
 */
function findMinValue(arr) {
  arr.map(item => {
    if (typeof item !== 'number') {
      throw new Error('Parameter is not a number array')
    }
  })
  return Math.min(...arr)
}

export default findMinValue