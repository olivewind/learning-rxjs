---
title: throwError
group:
  path: /create
  title: 创建流
  order: 1
order: 8
---

# throwError

```ts
throwError(errorOrErrorFactory: any, scheduler?: SchedulerLike): Observable<never>
```

<img src="./images/throw.png" alt="throw marble diagram" style="zoom:50%;" />

throwError 用于创建立刻抛出错误的 Observable。

除非你明确想返回一个 error observable，否者在大多数操作符内部都可以直接按照 JS 语言规范抛错，错误会被 RxJS 捕获（参考例二）。

#### 使用例子

```ts
import { throwError } from 'rxjs';

const error$ = throwError(() => {
  return new Error('ERROR');
});

error$.subscribe({
  error: err => console.log(err.message),
});
```

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
