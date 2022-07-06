/**
 * 输入一个RegExp类型的值，得到一个它的拷贝
 * @param {RegExp} value
 * @return {RegExp}
 * @example
 * 
 * const a = /abc/gi
 * const b = cloneRegExp(a)
 * console.log(b)  =>  /abc/gi
 * console.log(a === b)  =>  false
 */
function cloneRegExp(value) {
  return new RegExp(value.source, value.flags)
}

export default cloneRegExp