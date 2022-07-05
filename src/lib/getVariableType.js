/**
 * 输入一个值，得到它的类型
 * @param {*} value 
 * @return {string}
 * @example
 * 
 * console.log(getVariableType(1))  =>  Number
 * console.log(getVariableType('1'))  =>  String
 * console.log(getVariableType(true))  =>  Boolean
 * console.log(getVariableType(undefined))  =>  Undefined
 * console.log(getVariableType(null))  =>  Null
 * console.log(getVariableType(Symbol()))  =>  Symbol
 * console.log(getVariableType(new Object()))  =>  Object
 * console.log(getVariableType(new Function()))  =>  Function
 * console.log(getVariableType(new Set()))  =>  Set
 * console.log(getVariableType(new WeakSet()))  =>  WeakSet
 * console.log(getVariableType(new Map()))  =>  Map
 * console.log(getVariableType(new WeakMap()))  =>  WeakMap
 * console.log(getVariableType(new Date()))  =>  Date
 * console.log(getVariableType(new RegExp()))  =>  RegExp
 */
function getVariableType(value) {
  return Object.prototype.toString.call(value).replace(/\[|\]|object /g, "")
}

export default getVariableType