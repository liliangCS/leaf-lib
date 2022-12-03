# leaf-lib

一个轻量级的javascript库。

## 安装

```markdown
# npm
npm install leaf-lib
# yarn
yarn add leaf-lib
```

## 快速上手

在你的html文件中通过script标签引入项目根目录下的leaf.min.js文件，这时全局会暴露一个leaf对象。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./leaf.min.js"></script>
</head>
<body>
  <script>
    console.log(leaf)
  </script>
</body>
</html>
```

## 使用

```javascript
// esModule
import * as leaf from "leaf-lib"
// commonJs
const leaf = require("leaf-lib")

// 你也可以采用解构赋值的方式进行引入，例如：
import { debounce } from "leaf-lib"
or
const { debounce } = require("leaf-lib")
```

## 方法列表

- `classes(...args: Array<Object | string>): string`
- `cleanData(data: Object, dataFormat: Array): Object`
- `copyText(text: string): promise`
- `debounce(fn: Function, delay: number): Function`
- `deepClone(value: any): any`
- `findMaxValue(arr: number[]): number`
- `findMinValue(arr: number[]): number`
- `getTimeInfo(timestamp: number | string): Object`
- `getVariableType(value: any): string`
- `imageCompress(file: Object, config: Object): string | Object`
- `initPromiseFunc(fn: Function): Function`
- `isEmptyObject(value: Object): boolean`
- `isObject(value: any): boolean`
- `queryParse(value: string): Object`
- `queryStringify(value: Object): string`
- `random(...args: number[]): number`
- `styleStrToObject(styleStr: string): Object`
- `throttle(fn: Function, delay: number): Function`
- `uid(): string`

## 使用eventBus
```javascript
import { eventBus } from "leaf-lib"

// 监听事件
eventBus.on("test", (data) => {
  console.log(`这是一次${data}`)
})

// 触发事件
eventBus.emit("test", "测试")

// 取消单个事件的监听
eventBus.off("test")

// 取消所有事件的监听
eventBus.clear()
```

## 移动端适配(rem)
```javascript
import { remAdapter } from "leaf-lib"
// 接收一个number类型参数(divide)
// 不传默认为100，即代表1rem等于1/100屏幕宽度
remAdapter()
```