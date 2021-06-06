---
title: interval
group:
  path: /create
  title: 创建流
  order: 1
order: 4
---

# interval

<Alert type="info">

定时发出增量数字

</Alert>

```ts
interval(period: number = 0, scheduler: SchedulerLike = asyncScheduler): Observable<number>
```

### 使用例子

```ts
import { interval } from 'rxjs';

interval(1000).subscribe(x => {
  console.log(x);
});

// 0
// 1
// 2
// ....
```

上面这个例子第一次发出数据的时间是第一个时钟周期后也就是在 1000 毫秒后，如果你需要立即执行，那么 [timer](/streams/create/timer) 更适合你。

<br/>

参考资料：

- [interval](https://rxjs.dev/api/index/function/interval)
