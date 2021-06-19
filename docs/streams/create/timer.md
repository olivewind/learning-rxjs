---
title: timer
group:
  path: /create
  title: 创建流
  order: 1
order: 3
---

# timer

```ts
timer(dueTime: number | Date = 0, intervalOrScheduler?: number | SchedulerLike, scheduler: SchedulerLike = asyncScheduler): Observable<number>
```

timer 可以理解为是支持指定起始执行时间的 interval。

#### 使用例子

##### 从相对时间偏移开始发送

```ts
import { timer } from 'rxjs';

timer(0, 2000).subscribe(x => {
  console.log(x);
});

// 0
// 1
// 2
// ....
```

##### 从绝对时间开始发送

```typescript
import { timer } from 'rxjs';

const date = new Date();

// 3 秒之后
date.setSeconds(date.getSeconds() + 3);

timer(date, 2000).subscribe(x => {
  console.log(x);
});

// 0
// 1
// 2
// ....
```

<br/>

参考资料：

- [timer](https://rxjs.dev/api/index/function/timer)
