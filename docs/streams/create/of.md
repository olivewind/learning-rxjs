---
title: of
order: 0
group:
  path: /create
  title: 创建流
  order: 1
---

# of

<Alert type="info">

将参数转换为可观察序列

</Alert>

```ts
of<T>(...args: (SchedulerLike | T)[]): Observable<T>
```

![大理石图](./images/of.png)

### 使用例子

```ts
import { of } from 'rxjs';

of(1, 2, 3).subscribe(x => console.log(x));

// 1
// 2
// 3
```

<br/>

参考资料：

- [of](https://rxjs.dev/api/index/function/of)
