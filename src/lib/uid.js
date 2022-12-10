/**
 * id生成函数
 * @return {String}
 */
function uid() {
  let uidStr = ""
  const code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"]
  for (let i = 0; i < 17; i++) {
    uidStr += code[Math.floor(Math.random() * 63)]
  }
  return uidStr
}

export default uid