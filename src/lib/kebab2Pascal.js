/**
 * kebab-case转PascalCase
 * @param {string} text
 * @return {string}
 */
function kebab2Pascal(text) {
  const words = text.split("")
  words[0] = words[0].toUpperCase()
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "-") {
      words.splice(i, 1)
      words[i] = words[i].toUpperCase()
    }
  }
  return words.join("")
}

module.exports = kebab2Pascal
