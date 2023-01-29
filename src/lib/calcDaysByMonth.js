/**
 * 计算某年某月的天数
 * @param {number} year
 * @param {number} month
 * @returns
 */
const calcDaysByMonth = (year, month) => {
  let days = 31
  if ([4, 6, 9, 11].includes(month)) {
    days = 30
  } else if (month === 2) {
    // 闰年29，非闰年28
    if (isLeapYear(year)) {
      days = 29
    } else {
      days = 28
    }
  }
  return days
}

export default calcDaysByMonth
