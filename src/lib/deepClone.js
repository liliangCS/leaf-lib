import getVariableType from "./getVariableType"
import isObject from "./isObject"
import _cloneRegExp from "../au-lib/_cloneRegExp"
import _cloneSymbol from "../au-lib/_cloneSymbol"

/**
 * 输入一个值，得到它的深拷贝
 * @param {any} value
 * @return {any}
 * @example
 * 
 * const p1 = { name: 'tom', age: 18, firend: { name: 'john', age: 20 } }
 * const p2 = deepClone(p1)
 * console.log(p1.firend === p2.firend)  =>  false
 */
function deepClone(value) {
  const clone = (value, map) => {
    // 引用数据类型
    if (isObject(value)) {
      // 初始化值
      let res = _initRes(value)
      // 判断是否存在循环引用
      if (map.has(value)) return map.get(value)
      map.set(value, res)
      // 类型为Map
      if (getVariableType(value) === "Map") {
        value.forEach((item, index) => {
          res.set(clone(index, map), clone(item, map))
        })
        return res
      }
      // 类型为Set
      else if (getVariableType(value) === "Set") {
        value.forEach(item => {
          res.add(clone(item, map))
        })
        return res
      }
      // 类型为对象或者数组
      else if (getVariableType(value) === "Object" || getVariableType(value) === "Array") {
        for (const key in value) {
          if (value.hasOwnProperty(key)) {
            res[key] = clone(value[key], map)
          }
        }
        return res
      }
      // 类型为RegExp
      else if (getVariableType(value) === "RegExp") {
        return _cloneRegExp(value)
      }
      // 类型为Date
      else if (getVariableType(value) === "Date") {
        return new Date(value)
      }
      // 类型为函数（鉴于实用性，暂未作处理）
      else if (getVariableType(value) === "Function") {
        return value
      }
    }
    // 简单数据类型
    else {
      // 类型为Symbol
      if (getVariableType(value) === "Symbol") {
        return _cloneSymbol(value)
      } else {
        return value
      }
    }
  }

  // 辅助函数
  function _initRes(value) {
    if (getVariableType(value) === "Array") return []
    else if (getVariableType(value) === "Object") return {}
    else if (getVariableType(value) === "Set") return new Set()
    else if (getVariableType(value) === "Map") return new Map()
    else return null
  }

  return clone(value, new WeakMap())
}

export default deepClone