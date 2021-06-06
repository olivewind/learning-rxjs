---
title: range
group:
  path: /create
  title: 创建流
  order: 1
order: 5
---

# range

<Alert type="info">

创建一个发出指定范围内的数字序列的 Observable

</Alert>

```ts
range(start: number, count?: number, scheduler?: SchedulerLike): Observable<number>
```

![range marble diagram](./images/range.png)

### 使用例子

```ts
import { range } from 'rxjs';

const numbers = range(1, 3);

numbers.subscribe(x => console.log(x));

// 1
// 2
// 3
```

<br/>

参考资料：

- [range](http://localhost:8000/#/streams/create/range)
