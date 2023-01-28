/**
 * 输入一个普通函数，得到一个防抖函数
 * @param {Function} fn
 * @param {number} delay
 * @return {Function}
 * @example
 *
 * function sayHello() { console.log("Hello World") }
 * const newSayHello = debounce(sayHello, 1000)
 */
function debounce(fn, delay) {
  let timer = null
  const newFunc = (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
  return newFunc
}

export default debounce
