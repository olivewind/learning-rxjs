---
title: bindNodeCallback
order: 12
group:
  path: /create
  title: 创建流
  order: 1
---

# bindNodeCallback

```ts
bindNodeCallback(
  callbackFunc: (args_0: any, args_1: (err: any, ...res: any) => void) => void,
  resultSelector?: SchedulerLike | ((...args: any[]) => any),
  scheduler?: SchedulerLike): (...args: any[]
) => Observable<any>
```

它和 [`bindCallback`](/streams/create/bind-callback) 很相似，也是高阶函数，但回调的风格是 `callback(error, result)`，注意几点：

1. 没有产生订阅源函数不会被执行
2. 多次执行 callback 也只会推送一次
3. 当传递给 callback 的 Error 对象为真时，Observable 进入 error。

4. `bindNodeCallback` 也可以在非 Node.js 环境中使用，“Node.js 风格”只是一种约定。

#### 使用例子

```typescript
import { bindNodeCallback } from 'rxjs';
import * as fs from 'fs';

const readFileAsObservable = bindNodeCallback(fs.readFile);

readFileAsObservable('./roadNames.txt', 'utf8').subscribe(
  x => console.log(x),
  e => console.error(e),
);
```

<br/>

参考资料：

- [bindNodeCallback](https://rxjs.dev/api/index/function/bindNodeCallback)
