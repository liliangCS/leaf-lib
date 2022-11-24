// config支持配置项
// width：图片宽度
// height：图片高度
// quality：图片质量
// dataType: 返回数据类型（"base64" 或者 "blob"）

/**
 * 图片压缩
 * @param {Object} file 
 * @param {Object} config 
 * @return { Object | String }
 */

function imageCompress(file, config = {}) {
  // 文件读取
  const reader = new FileReader()
  // 设置默认文件类型
  const fileType = file?.type || "image/png"
  // img对象
  const imgObj = new Image()

  return new Promise((resolve, reject) => {

    // 监听图片加载过程
    imgObj.addEventListener("load", () => {

      // 计算原始图像的宽高比
      const originImageRatio = imgObj.width / imgObj.height
      let targetImageWidth = imgObj.width
      let targetImageHeight = imgObj.height

      /**
       * 判断宽高指定情况:
       * 1、宽高都指定，输出图像宽高按照指定宽高输出
       * 2、只指定宽度，输出图像宽度为指定宽度，高度根据原始图像宽高比等比扩缩
       * 3、只指定高度，输出图像高度为指定高度，宽度根据原始图像宽高比等比扩缩
       */

      if (config.width && config.height) {
        targetImageWidth = config.width
        targetImageHeight = config.height
      } else if (config.width || config.height) {
        if (config.width) {
          targetImageWidth = config.width
          targetImageHeight = targetImageWidth / originImageRatio
        } else {
          targetImageHeight = config.height
          targetImageWidth = targetImageHeight * originImageRatio
        }
      }

      // 创建canvas元素
      const canvasEl = document.createElement("canvas")
      canvasEl.width = targetImageWidth
      canvasEl.height = targetImageHeight
      const ctx = canvasEl.getContext("2d")
      ctx.clearRect(0, 0, targetImageWidth, targetImageHeight)
      ctx.drawImage(imgObj, 0, 0, targetImageWidth, targetImageHeight)

      // 输出不同类型数据
      if (config.dataType === "blob") {
        canvasEl.toBlob((blob) => {
          resolve(blob)
        }, fileType, config.quality || 0.6)
      } else {
        const base64 = canvasEl.toDataURL(fileType, config.quality || 0.6)
        resolve(base64)
      }
    })

    reader.addEventListener("load", () => {
      if (reader.readyState === 2) {
        imgObj.src = reader.result
      }
    })

    reader.readAsDataURL(file)
  })
}

export default imageCompress