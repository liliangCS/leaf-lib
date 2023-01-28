import memoryCalc from "./memoryCalc"

/**
 * 内存大小格式化函数，保留两位小数
 * @param {number} size
 * @param {string} unit
 * @return {string}
 *
 * @example
 * const res = memoryFormat(10000, "b")
 * console.log(res)  ==>  "1.22KB"
 */
function memoryFormat(size, unit) {
  const units = ["b", "B", "KB", "MB", "GB"]
  if (!units.includes(unit)) {
    throw new Error("Unit Only 'b','B','KB','MB','GB' are supported.")
  }
  let index = units.indexOf(unit)
  while (size >= 1024 || (index === 0 && size >= 8)) {
    size = memoryCalc(size, units[index], units[++index])
  }
  const res = size.toFixed(2) + units[index]
  return res
}

export default memoryFormat
