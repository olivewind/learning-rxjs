---
title: bindCallback
order: 11
group:
  path: /create
  title: 创建流
  order: 1
---

# bindCallback

```ts
bindCallback(callbackFunc: (args_0: any, args_1: (...res: any) => void) => void, resultSelector?: SchedulerLike | ((...args: any[]) => any), scheduler?: SchedulerLike): (...args: any[]) => Observable<unknown>
```

bindCallback 是一个将 callback 风格的源函数转换为返回 Observable 的目标函数的高阶函数（函数返回函数）。

比如我们现在有一个 callback 风格的函数如下

```ts
function getData(message: string, callback: (res: string) => void) {
  callback(`hello ${message}`);
}

// 常规使用
getData('world', res => {
  console.log(res);
});
```

使用 bindCallback 包装成返回 Observable 的函数

```ts
import { bindCallback } from 'rxjs';

// 转换成 Observable
const getDataStream = bindCallback(getData);

getDataStream('world').subscribe(res => {
  console.log(res);
});
```

值得一提的是这里的 Observable 是惰性求值的，也就是说如果没有产生订阅，源函数是不会执行的

```typescript
const getDataStream = bindCallback(getData);

getDataStream('world'); // 没有产生订阅，永远不会执行 getData 函数
```

另外需要注意的是，在 callback 函数执行一次之后，Observable 就结束了，也就是说多次执行 callback 是无效的

```typescript
import { bindCallback } from 'rxjs';

function getData(message: string, callback: (res: string) => void) {
  callback(`hello ${message}`);
  callback(`hello ${message}`);
}

const getDataStream = bindCallback(getData);

getDataStream('world'); // 只会打印一次 hello world
```

<br/>

参考资料：

- [bindCallback](https://rxjs.dev/api/index/function/bindCallback)
