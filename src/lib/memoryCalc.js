/**
 * 内存换算
 * @param {Number} size 
 * @param {String} unit 
 * @param {String} targetUnit 
 * @return {Number}
 * 
 * @example
 * const res = memoryCalc(8, "b", "B")
 * console.log(res)  ==>  1
 */
function memoryCalc(size, unit, targetUnit) {
  const rule = {
    b: 1,
    B: 8,
    KB: 8 * 1024,
    MB: 8 * 1024 * 1024,
    GB: 8 * 1024 * 1024 * 1024
  }
  const units = Object.keys(rule)
  // 错误处理
  if (!units.includes(targetUnit)) {
    throw new Error("TargetUnit Only 'b','B','KB','MB','GB' are supported.")
  }
  if (!units.includes(unit)) {
    throw new Error("Unit Only 'b','B','KB','MB','GB' are supported.")
  }
  const res = size * rule[unit] / rule[targetUnit]
  return res
}

export default memoryCalc