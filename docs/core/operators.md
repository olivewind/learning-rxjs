---
title: 第 2 步：编排流
order: 2
---

## 第 2 步：编排流

到目前为止我们学习到 RxJS 的知识还非常有限，很难在实际业务场景中发挥价值，实际上 RxJS 最强大的地方它提供了数百个功能强大的[操作符](/operators/basic/audit)。

不过在跳进数百个 API 列表中之前，现在开始我们先体验几个最为简单的操作符，看下面这个例子：

1. 创建一个每秒钟推送一次的流
2. 将每次推送的数据乘于 10
3. 去除掉能够被 4 整除的推送

```typescript
import { interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const stream$ = interval(1000).pipe(
  map(v => v * 10),
  filter(v => v % 4 !== 0),
);

stream$.subscribe(num => {
  console.log(num);
});

// 10
// 30
// 50
// 70
// 90
// ...
```

#### 什么是 pipe？

用大白话说就是`"顺序执行，并把上一个函数的出参作为下一个函数的入参数"`：

```typescript
pipe(a, b, c);
// 等价于
c(b(a(args)));
```

那么在上面这个例子中的执行过程可以理解为：`先执行 map，将结果传入 filter`

<Alert type="info">

如何你了解函数式编程的话，那么你应该会觉得很自然，实际上这就是 `compose` 的倒序版

</Alert>

没了，就这么简单，ok，现在我们已经编排出一个可用的流的，下一步我们学习如何[订阅流](/core/subscription)。
