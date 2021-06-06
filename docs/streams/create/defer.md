---
title: defer
order: 14
group:
  path: /create
  title: 创建流
  order: 6
---

# defer

<Alert type="info">

惰性创建 Observable，即只有在它被订阅时才创建

</Alert>

```ts
defer<R extends ObservableInput<any>>(observableFactory: () => R): Observable<ObservedValueOf<R>>
```

![延迟大理石图](./images/defer.png)

### 使用例子

```ts
import { defer, of } from 'rxjs';

let flag = 0;

const flag$ = defer(() => {
  return flag === 0 ? of(0) : of(1);
});

flag = 0;

flag$.subscribe(x => console.log(x)); // 0

flag = 1;

flag$.subscribe(x => console.log(x)); // 1
```

<br/>

参考资料：

- [defer](http://localhost:8000/#/streams/create/defer)
