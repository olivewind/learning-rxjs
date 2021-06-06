---
title: throwError
group:
  path: /create
  title: 创建流
  order: 1
order: 8
---

# throwError

<Alert type="info">

创建一个 Observable，它将创建一个错误实例，并在订阅后立即将其作为错误推送给消费者。

</Alert>

```ts
throwError(errorOrErrorFactory: any, scheduler?: SchedulerLike): Observable<never>
```

![throw marble diagram](./images/throw.png)

### 使用例子

```ts
import { throwError } from 'rxjs';

const error$ = throwError(() => {
  return new Error('ERROR');
});

error$.subscribe({
  error: err => console.log(err.message),
});
```

除非你明确想返回一个 error observable，否者在大多数操作符内部都可以直接按照 JS 语言规范抛错，错误会被 Rxjs 捕获，比如下面这个例子

```typescript
import { defer, of, throwError } from 'rxjs';

const demo$ = defer(() => {
  return throwError(() => new Error('ERROR'));
  // 等价于
  // throw new Error('ERROR');
});

demo$.subscribe({
  error(e) {
    console.log(e.message);
  },
});
```

<br/>

参考资料：

- [throwError](https://rxjs.dev/api/index/function/throwError)
