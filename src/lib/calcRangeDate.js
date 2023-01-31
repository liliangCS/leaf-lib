/**
 * 计算两个日期之间的所有的天数
 * @param {{ year: number, month: number, date: number }} startDate 
 * @param {{ year: number, month: number, date: number }} endDate 
 * @returns {Array<{year: number, month: number, date: number}>}
 */
const calcRangeDate = (startDate, endDate) => {
  const sdStr = startDate.year + '-' + startDate.month + '-' + startDate.date
  const edStr = endDate.year + '-' + endDate.month + '-' + endDate.date
  const sdTimeStamp = new Date(sdStr).getTime()
  const edTimeStamp = new Date(edStr).getTime()
  const unit = 1000 * 60 * 60 * 24
  const timestampArr = []
  for (let i = sdTimeStamp + unit; i < edTimeStamp; i += unit) {
      timestampArr.push(i)
  }
  const res = timestampArr.map(item => {
      const timeObj = new Date(item)
      const year = timeObj.getFullYear()
      const month = timeObj.getMonth() + 1
      const date = timeObj.getDate()
      return { year, month, date }
  })
  return res
}

export default calcRangeDate