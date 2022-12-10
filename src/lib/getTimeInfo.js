/**
 * 传入一个时间戳（支持秒或毫秒为单位），得到一个包含时间信息的对象
 * @param {Number | String} timestamp
 * @return {Object}
 * @example
 * 
 * console.log(getTimeInfo(1657437083597))  =>  { year: 2022, month: 7, date: 10, day: '星期日', hours: 15, minutes: 11, seconds: 23 }
 * console.log(getTimeInfo('1657437083597'))  => { year: 2022, month: 7, date: 10, day: '星期日', hours: 15, minutes: 11, seconds: 23 }
 * console.log(getTimeInfo(1657437083))  =>  { year: 2022, month: 7, date: 10, day: '星期日', hours: 15, minutes: 11, seconds: 23 }
 * console.log(getTimeInfo('1657437083'))  =>  { year: 2022, month: 7, date: 10, day: '星期日', hours: 15, minutes: 11, seconds: 23 }
 */
function getTimeInfo(timestamp) {
  let time = String(timestamp)
  if (time.length === 10) {
    time += '000'
  }
  time = Number(time)
  const dateObj = new Date(time), res = {}
  res.year = dateObj.getFullYear()
  res.month = dateObj.getMonth() + 1
  res.date = dateObj.getDate()
  res.day = getDetilsDay(dateObj.getDay())
  res.hours = dateObj.getHours()
  res.minutes = dateObj.getMinutes()
  res.seconds = dateObj.getSeconds()

  // 辅助函数
  function getDetilsDay(value) {
    const week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
    return week[value]
  }
  return res
}

export default getTimeInfo