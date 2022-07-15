import getVariableType from "./getVariableType"

/**
 * 输入一个query查询字符串，得到一个对应的对象
 * @param {string} value 
 * @return {Object}
 * @example
 * 
 * const queryObj = queryParse("question=花儿为什么这么红&timestamp=1657880717778")
 * console.log(queryObj)  =>  { question: "花儿为什么这么红", timestamp: 1657880717778 }
 */
function queryParse(value) {
  if (getVariableType(value) !== 'String') {
    throw new TypeError("parameter is not a string")
  }
  const res = {}
  const temp = value.split("&")
  temp.map((item) => {
    const keyValue = item.split("=")
    res[keyValue[0]] = keyValue[1]
  })
  return res
}

export default queryParse