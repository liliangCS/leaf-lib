/**
 * 获取时间对象
 * @param {"datetime" | "date" | "month" | "year"} type
 * @return {Object}
 */
const getNowTime = (type) => {
  const timeObj = new Date()
  const year = timeObj.getFullYear()
  const month = timeObj.getMonth() + 1
  const date = timeObj.getDate()
  const hour = timeObj.getHours()
  const minute = timeObj.getMinutes()
  const second = timeObj.getSeconds()

  switch (type) {
    case "datetime":
      return { year, month, date, hour, minute, second }
    case "date":
      return { year, month, date }
    case "month":
      return { year, month }
    case "year":
      return { year }
  }
}

export default getNowTime
