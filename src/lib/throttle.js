/**
 * 输入一个普通函数，得到一个节流函数
 * @param {Function} fn 
 * @param {Number} delay 
 * @return {Function}
 * @example
 * 
 * function sayHello() { console.log("Hello World") }
 * const newSayHello = throttle(sayHello, 1000)
 */
function throttle(fn, delay) {
  let lastTime = 0
  const newFunc = (...args) => {
    const nowTime = Date.now()
    if (nowTime - lastTime >= delay) {
      lastTime = nowTime
      fn.apply(this, args)
    }
  }
  return newFunc
}

export default throttle