import getVariableType from "./getVariableType"

/**
 * 接收字符串或者对象作为参数，得到一个字符串
 * @param  {...args: Array<Object | string>} args
 * @returns {string}
 * @example
 *
 * classes({title: 1 > 0}, "name")  =>  "title name"
 */

function classes(...args) {
  const classArr = []
  // 判断参数是对象还是字符串
  args.map((arg) => {
    switch (getVariableType(arg)) {
      case "String":
        classArr.push(arg)
        break
      case "Object":
        const keys = Object.keys(arg)
        const argArr = keys.filter((key) => arg[key]).map((key) => String(key))
        classArr.push(...argArr)
        break
      default:
        throw new TypeError("Parameter invalid")
    }
  })
  return classArr.join(" ")
}

export default classes
