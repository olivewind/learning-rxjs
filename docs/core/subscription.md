---
title: 第 3 步：订阅流
nav:
  path: /core
  title: 核心概念
  order: 0
order: 3
---

## 第 3 步：订阅流

#### 方法一

```typescript
import { of } from "rxjs";

const stream$ = of(1, 2, 3);

stream$.subscribe(
  (data) => {
    console.log("方法一：数据", data);
  },
  () => {
    console.error("方法一：错误");
  },
  () => {
    console.log("方法一：结束");
  }
);
```



#### 方法二

```typescript
import { of } from "rxjs";

const stream$ = of(1, 2, 3);

stream$.subscribe({
  next(data) {
    console.log("方法二：数据", data);
  },
  error() {
    console.error("方法二：错误");
  },
  complete() {
    console.log("方法二：结束");
  }
});
```



<Alert type="info">

请务必在合适的时机结束流或者取消订阅（通常是组件销毁的时候），否则非常容易出现内存泄漏，很多新手会犯这种错误，

</Alert>



现在你已经学会如何订阅流了，下一步我们学习如何[结束流](/core/unsubscribe)。





