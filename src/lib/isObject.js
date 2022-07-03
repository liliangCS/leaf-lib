/**
 * 判断值是否为对象类型
 * @param {*} value
 * @return {boolean}
 * @example
 * 
 * isObject(null)  => false
 * 
 * isObject(new Function) => true
 * 
 * isObject(new Array) => true
 */
function isObject(value) {
  const type = typeof value
  return  type === "function" || (type === "object" && value !== null)
}

export default isObject