---
title: Observable
nav:
  path: /core
  title: 核心概念
  order: 0
group:
  path: /stream
  title: 第一步：创建流
  order: 1
---

## Observable

<Alert type="warning">
  为了演示方便，请重点关注 Rxjs 部分代码，暂时忽略 React 组件“纯不纯”的问题，哈哈哈
</Alert>

实际上创建一个 Rxjs 流非常简单，乍一眼看过去就像创建一个 `Promise` 一样

```tsx
/**
 * defaultShowCode: true
 */
import React from "react";
import { Observable, Subscription } from "rxjs";

// 创建一个流，每 1 秒钟发射一个值，到第 5 秒结束
const observable = new Observable<number>((subscriber) => {
  // 注意这条日志只会在产生订阅的时候才会打印
  console.log("observable created");
  let count = 0;
  subscriber.next(count);
  const timer = setInterval(() => {
    count += 1;
    // 你可以人为制造一个错误
    // subscriber.error();
    subscriber.next(count);
    if (count === 5) {
      clearInterval(timer);
      subscriber.complete();
    }
  }, 1000);
});

export default class Demo extends React.Component<{}, { num: number }> {
  subscription: Subscription;
  constructor(props) {
    super(props);
    this.state = {
      num: -1
    };
  }

  onStop = () => {
    this.subscription?.unsubscribe();
  };

  onStart = () => {
    this.onStop();
    this.subscription = observable.subscribe(
      (num) => {
        console.log("订阅到数据", num);
        this.setState({
          num
        });
      },
      () => {
        console.error("error");
      },
      () => {
        console.log("complete");
      }
    );
  };

  // 组件销毁时候取消订阅
  componentWillUnmount() {
    this.onStop();
  }

  render() {
    return (
      <div>
        <h2>{this.state.num}</h2>
        <button onClick={this.onStart}>开始订阅</button>
        <br />
        <br />
        <button onClick={this.onStop}>取消订阅</button>
      </div>
    );
  }
}
```

在体验过上面这个示例之后我们目前可以得出几个结论

1. Observable 是可以多次发射值的，这在 Promise A+ 规范中无法做到，这也是两者最根本的区别

   ```typescript
   const promise = new Promise((resolve) => {
     // 这里会立刻执行
     resolve(1);
     // 第二条永远不会推送成功
     resolve(2);
   });
   ```

2. Observable 的发射过程是可以被终止，只需要调用 `subscription.unsubscribe()`

   

3. Observable 是懒惰计算的，也就是如果没有消费者，它不会有任何副作用，而 Promise 一旦创建就开始计算

   ```typescript
   const promise = new Promise(() => {
     // 这里会立刻执行，即使没有任何消费者
     console.log('promise created');
   });
   ```

OK，到目前为止知道这些就足够了，其它区别我们之后慢慢再说。


#### 思考：

1. 如何像 Rxjs 一样去取消一个 pending 状态的 Promise 呢？🤔 （可以想想 axios 是怎么实现取消 Promise 的？）

