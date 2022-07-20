/**
 * 输入一个区间，得到这个区间的随机值
 * @param  {number, number?} args
 * @return {number}
 * @example
 * 
 * const res1 = random(10, 20)  =>  10 <= res1 < 20
 * const res2 = random(10)  =>  0 <= res2 < 10
 */
function random(...args) {
  if (args.length !== 1 && args.length !== 2) {
    throw new Error('function random needs to accept one or two parameter')
  }
  for (const item of args) {
    if (typeof item !== "number") {
      throw new TypeError('The parameter type must be number')
    }
  }
  return args.length === 1 ? Math.random() * args[0] : Math.random() * (args[1] - args[0]) + args[0]
}

export default random