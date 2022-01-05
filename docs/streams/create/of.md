---
title: of
order: 0
group:
  path: /create
  title: 创建流
  order: 1
---

# of

```ts
of<T>(...args: (SchedulerLike | T)[]): Observable<T>
```

<img src="./images/of.png" alt="of" style="zoom:50%;" />

of 可以将任意值转换为 Observable。

#### 使用例子

```ts
import React from 'react';
import { of } from 'rxjs';

of(1, 2, 3).subscribe(x => console.log(x));

// 1
// 2
// 3
```

[![Edit of](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/of-b5z0r?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=1)

<br/>

参考资料：

- [of](https://rxjs.dev/api/index/function/of)
