// 方法类
import isObject from "./lib/isObject"
import debounce from "./lib/debounce"
import throttle from "./lib/throttle"
import findMaxValue from "./lib/findMaxValue"
import findMinValue from "./lib/findMinValue"
import getVariableType from "./lib/getVariableType"
import deepClone from "./lib/deepClone"
import initPromiseFunc from "./lib/initPromiseFunc"
import getTimeInfo from "./lib/getTimeInfo"
import queryStringify from "./lib/queryStringify"
import queryParse from "./lib/queryParse"
import random from "./lib/random"
// 工具类
import eventBus from "./event"
// 屏幕适配
import remAdapter from "./layout/remAdapter"

export {
  isObject,
  debounce,
  throttle,
  findMaxValue,
  findMinValue,
  getVariableType,
  deepClone,
  initPromiseFunc,
  getTimeInfo,
  queryStringify,
  queryParse,
  random,
  eventBus,
  remAdapter
}