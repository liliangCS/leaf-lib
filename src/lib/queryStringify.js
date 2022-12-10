import isObject from "./isObject"

/**
 * 输入一个对象，得到一个query查询字符串
 * @param {Object} value 
 * @return {String}
 * @example
 * 
 * const queryStr = queryStringify({ question: "花儿为什么这么红", timestamp: 1657880717778 })
 * console.log(queryStr)  =>  "question=花儿为什么这么红&timestamp=1657880717778"
 */
function queryStringify(value) {
  if (!isObject(value)) {
    throw new TypeError("parameter is not a object")
  }
  let res = ""
  const keys = Object.keys(value)
  keys.map((item) => {
    res += item + "=" + value[item] + "&"
  });
  return res.slice(0, -1)
}

export default queryStringify
