/**
 * 输入一个number数组，得到一个数组子项最大值
 * @param {number[]} arr
 * @return {number}
 * @example
 * 
 * findMaxValue([1, 2, 3, 4]) => 4
 */
function findMaxValue(arr) {
  arr.map(item => {
    if (typeof item !== 'number') {
      throw new Error('Parameter is not a number array')
    }
  })
  return Math.max(...arr)
}

export default findMaxValue