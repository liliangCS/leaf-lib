/**
 * 输入一个Symbol类型的值，得到一个它的拷贝
 * @param {Symbol} value
 * @return {Symbol}
 * @example
 * 
 * const a = Symbol("aaa")
 * const b = cloneSymbol(a)
 * console.log(a)  =>  Symbol(aaa)
 * console.log(b)  =>  Symbol(aaa)
 * console.log(a === b)  =>  false
 */
function cloneSymbol(value) {
  const valueStr = String(value)
  const args = valueStr.slice(7, valueStr.length - 1)
  return Symbol(args)
}

export default cloneSymbol

