/**
 * 判断是否是闰年
 * @param {number} year
 * @returns
 */
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export default isLeapYear
