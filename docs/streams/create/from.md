---
title: from
order: 1
group:
  path: /create
  title: 创建流
  order: 1
---

# from

```ts
from<T>(input: ObservableInput<T>, scheduler?: SchedulerLike): Observable<T>
```

<img src="./images/from.png" style="zoom:50%;" />

from 可以从数组、类似数组的对象、Promise、可迭代对象或类似 Observable 的对象创建一个 Observable

#### 使用例子

##### 将数组转换为 Observable

```ts
import { from } from 'rxjs';

const array = [1, 2, 32];

from(array).subscribe(x => console.log(x));

// 1
// 2
// 3
```

[![Edit from-1](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/from-1-k89lf?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark)

##### 将 Promise 转换为 Observable

```typescript
import { from } from 'rxjs';

function getMessage() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('hello world');
    }, 2000);
  });
}
const promise = getMessage();

from(promise).subscribe(res => console.log(res));

// hello world
```

[![Edit from-2](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/from-2-b3qu7?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=1)

##### 将迭代器转换为 Observable

```ts
import { from } from 'rxjs';
import { take } from 'rxjs/operators';

function* getNumber() {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
}

const iterator = getNumber();

from(iterator)
  .pipe(take(5))
  .subscribe(x => console.log(x));

// 1
// 2
// 3
// 4
// 5
```

[![Edit from-3](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/from-3-t8k5t?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=1)

<br/>

参考资料：

- [from](https://rxjs.dev/api/index/function/from)
