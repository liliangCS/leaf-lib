// 版本
import { version } from "../package.json"

// 方法类别
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
import classes from "./lib/classes"
import styleStrToObject from "./lib/styleStrToObject"
import isEmptyObject from "./lib/isEmptyObject"
import uid from "./lib/uid"
import copyText from "./lib/copyText"
import imageCompress from "./lib/imageCompress"
import cleanData from "./lib/cleanData"
import memoryCalc from "./lib/memoryCalc"
import memoryFormat from "./lib/memoryFormat"
import isLeapYear from "./lib/isLeadYear"
import calcDaysByMonth from "./lib/calcDaysByMonth"
import getNowTime from "./lib/getNowTime"
import calcRangeDate from "./lib/calcRangeDate"
import kebab2Pascal from "./lib/kebab2Pascal"
// 工具类别
import eventBus from "./event"
// 屏幕适配
import remAdapter from "./layout/remAdapter"

export {
  version,
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
  classes,
  styleStrToObject,
  isEmptyObject,
  uid,
  copyText,
  imageCompress,
  cleanData,
  memoryCalc,
  memoryFormat,
  isLeapYear,
  calcDaysByMonth,
  getNowTime,
  calcRangeDate,
  kebab2Pascal,
  eventBus,
  remAdapter
}
