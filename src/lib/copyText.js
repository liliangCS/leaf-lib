/**
 * 复制文本
 * @param {String} text 
 * @return { Promise }
 */

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch (error) {
    throw new Error("copyText: " + error.message)
  }
  return true
}

export default copyText