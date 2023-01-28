/**
 * 检测一个对象是否为空对象
 * @param {Object} value
 * @returns
 */
function isEmptyObject(value) {
  return !Object.keys(value).length
}

export default isEmptyObject
