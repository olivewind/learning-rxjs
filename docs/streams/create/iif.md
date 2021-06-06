---
title: iif
group:
  path: /create
  title: 创建流
  order: 1
order: 6
---

# iif

<Alert type="info">

在订阅时检查条件函数返回值以确定使用哪个数据源

</Alert>

```ts
iif<T, F>(condition: () => boolean, trueResult: ObservableInput<T>, falseResult: ObservableInput<F>): Observable<T | F>
```

在订阅的那一刻，`condition`函数被调用，如果结果为`true`，则使用 `trueResult` 作为数据源，否则使用 `falseResult`作为数据源。如果你想在两个以上的数据源之间切换可以使用[`defer`](/streams/create/defer)。

### 使用例子

```ts
import { iif, of } from 'rxjs';

let signal = 0;

const number$ = iif(
  () => {
    return signal === 0;
  },
  of(0),
  of(1),
);

signal = 0;

number$.subscribe(x => console.log(x)); // 0

signal = 1;

number$.subscribe(x => console.log(x)); // 1

// 等价于
// (signal === 0 ? of(0) : of(1)).subscribe((x) => console.log(x));
```

<br/>

参考资料：

- [iif](https://rxjs.dev/api/index/function/iif)
