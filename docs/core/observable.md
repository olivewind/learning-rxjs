---
title: 第 1 步：创建流
nav:
  path: /core
  title: 快速入门
  order: 0
order: 2
---

## 第 1 步：创建流

使用 `Observable` 创建一个 RxJS 流非常简单，乍一眼看过去就像创建一个 `Promise` 一样

```ts
import { Observable } from 'rxjs';

console.log('before');

const stream$ = new Observable(subscriber => {
  // 注意这条日志只会在产生订阅的时候才会打印
  console.log('created');
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(3);
    subscriber.complete();
  }, 2000);
});

console.log('after');

stream$.subscribe(num => {
  console.log('订阅到数据', num);
});

// before
// after
// created
// 订阅到数据 1
// 订阅到数据 2
// 订阅到数据 3
```

在体验过上面这个示例之后我们目前可以得出几个结论

1. `Observable 是可以多次发射值的`，这在 [Promise A+](https://promisesaplus.com/) 规范中无法做到，这也是两者非常重要的一个区别

   ```typescript
   const promise = new Promise(resolve => {
     resolve(1);
     // 第二条永远不会推送成功
     resolve(2);
   });
   ```

2. `Observable 是懒惰计算的`，如果没有消费者，它不会有任何副作用，而 Promise 一旦创建就开始计算

   ```typescript
   const promise = new Promise(() => {
     // 这里会立刻执行，即使没有任何消费者
     console.log('promise created');
   });
   ```

OK，你已经知道如何创建一个简单的流了，下一步我们学习如何[编排流](/core/operators)。
