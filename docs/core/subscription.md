---
title: 第 3 步：订阅流
order: 3
---

## 第 3 步：订阅流

##### 方法一

```typescript
import { interval } from 'rxjs';

const stream$ = interval(2000);

stream$.subscribe(
  data => {
    console.log('方法一：数据', data);
  },
  () => {
    console.error('方法一：错误');
  },
  () => {
    console.log('方法一：结束');
  },
);

// 错误和结束并不是必需的，换句话说如果你只想处理正常推送的数据你可以进一步简化代码
stream$.subscribe(data => {
  console.log('方法一：数据', data);
});
```

##### 方法二

```typescript
import { interval } from 'rxjs';

const stream$ = interval(2000);

stream$.subscribe({
  next(data) {
    console.log('方法二：数据', data);
  },
  error() {
    console.error('方法二：错误');
  },
  complete() {
    console.log('方法二：结束');
  },
});
```

现在你已经学会如何订阅流了，但如果只订阅而不在合适的时机取消订阅的话非常容易出现内存泄漏（常见在组件销毁的时候忘记取消订阅），下一步我们学习如何[结束流](/core/unsubscribe)。
