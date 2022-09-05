/**
 * rem移动端适配，divide代表分度，默认为100，代表1rem等于1/100屏幕宽度
 * @param {number} divide 
 * @return {void}
 */
function remAdapter(divide = 100) {
  const htmlEL = document.documentElement
  function setRemUnit() {
    const htmlWidth = htmlEL.clientWidth
    const htmlFontSize = htmlWidth / divide
    htmlEL.style.fontSize = htmlFontSize + "px"
  }
  setRemUnit()
  window.addEventListener("resize", setRemUnit)
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      setRemUnit()
    }
  })
}

export default remAdapter