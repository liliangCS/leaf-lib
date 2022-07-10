/**
 * 输入一个函数，得到一个promise风格的函数，支持链式调用
 * @param {Function} fn
 * @return {Function}
 * @example
 * 
 * function foo() { return 123 }
 * const newFoo = initPromiseFunc(foo)
 * newFoo().then(res => console.log(res))  =>  123
 */
function initPromiseFunc(fn) {
  const newFunc = function(...args) {
    return new Promise(reslove => {
      const res = fn.apply(this, args)
      reslove(res)
    })
  }
  return newFunc
}

export default initPromiseFunc