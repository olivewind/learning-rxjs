---
title: 第 3 步：订阅流
nav:
  path: /core
  title: 核心概念
  order: 0
order: 3
---

## 第 3 步：订阅流

在第 2 步编排出一个合适的流之后，有两种方法可以订阅它：

#### 方法一

```typescript
import { of } from "rxjs";
const observable = of(1, 2, 3);

observable.subscribe(
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

const observable = of(1, 2, 3);

observable.subscribe({
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

