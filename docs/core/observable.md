---
title: 第 1 步：创建流
nav:
  path: /core
  title: observable
  order: 0
order: 2
---

## 第 1 步：创建流

使用 `Observable` 创建一个 Rxjs 流非常简单，乍一眼看过去就像创建一个 `Promise` 一样

```ts
import { Observable } from "rxjs";

const stream$ = new Observable((subscriber) => {
  // 注意这条日志只会在产生订阅的时候才会打印
  console.log("observable created");
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(3);
    subscriber.complete();
  }, 2000);
});

stream$.subscribe((num) => {
  console.log("订阅到数据", num);
});
```

在体验过上面这个示例之后我们目前可以得出几个结论

1. `Observable 是可以多次发射值的`，这在 Promise A+ 规范中无法做到，这也是两者最根本的区别

   ```typescript
   const promise = new Promise((resolve) => {
     resolve(1);
     // 第二条永远不会推送成功
     resolve(2);
   });
   ```
   
3. `Observable 是懒惰计算的`，如果没有消费者，它不会有任何副作用，而 Promise 一旦创建就开始计算

   ```typescript
   const promise = new Promise(() => {
     // 这里会立刻执行，即使没有任何消费者
     console.log('promise created');
   });
   ```

OK，你已经知道如何创建一个简单的流了，下一步我们学习如何[编排流](/core/operators)。

