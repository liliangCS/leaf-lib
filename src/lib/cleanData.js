/**
 * 整理数据格式函数，根据指定数据格式输出数据
 * @param {Object} data 
 * @param {Array} dataFormat 
 * @return {Object}
 * 
 * @example
 *const data = {
    name: "李明",
    friends: ["李红", "李华"],
    skills: {
      types: ["前端", "后端", "运维", "测试", "UI"],
      langs: ["c", "c++", "ruby", "java"]
    }
  }
  const dataFormat = ["name", ["skills", ["langs"]]]
  console.log(cleanData(data, dataFormat))  ==>  { name: '李明', skills: { langs: [ 'c', 'c++', 'ruby', 'java' ] } }
 */
function cleanData(data, dataFormat) {
  const targetData = {}
  for(const key of dataFormat) {
    if (Object.prototype.toString.call(key) === "[object String]") {
      targetData[key] = data[key] ?? null
    } else {
      targetData[key[0]] = data[key[0]] === undefined ? null : cleanData(data[key[0]], key[1])
    }
  }
  return targetData
}

export default cleanData