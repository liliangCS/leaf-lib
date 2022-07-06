# leaf-lib

一个轻量级的javascript库

## 安装

```markdown
# npm
npm install leaf-lib
# yarn
yarn add leaf-lib
```

## 使用

```javascript
// esModule
import * as leaf from "leaf-lib"
or
import { debounce, throttle } from "leaf-lib"
// commonJs
const leaf = require("leaf-lib")
or
const { debounce, throttle } = require("leaf-lib")
```

## 方法列表

- `debounce(fn: Function, delay: number): Function`
- `deepClone(value: any): any`
- `findMaxValue(arr: number[]): number`
- `findMinValue(arr: number[]): number`
- `getVariableType(value: any): string`
- `isObject(value: any): boolean`
- `throttle(fn: Function, delay: number): Function`