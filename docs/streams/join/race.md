---
title: race
order: 5
group:
  path: /join
  title: 复合流
  order: 2
---

# race

```typescript
race<T>(...sources: (
  Observable<T> |
  InteropObservable<T> |
  AsyncIterable<T> |
  PromiseLike<T> |
  ArrayLike<T> |
  Iterable<...> |
  ReadableStreamLike<...> |
  ObservableInput<...>[]
  )[]
): Observable<any>
```

<img src="./images/race.png" alt="race" style="zoom:50%;" />

race 和 Promise 的 race 很类似，会同时订阅多个数据流，一旦某条数据流发出第一个值，那么会采用该数据流并取消其它数据流的订阅。

1. 就像竞赛一样，第一个推送值的数据流将会被采用
2. 第一个流如果不是推送值而是出错，那么该流也会被采用

#### 使用例子

```typescript
import { race, interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const a$ = interval(1000).pipe(mapTo('fast one'));
const b$ = interval(3000).pipe(mapTo('medium one'));
const c$ = interval(5000).pipe(mapTo('slow one'));

race(a$, b$, c$).subscribe(winner => console.log(winner));

// 'fast one'
// 'fast one'
// 'fast one'
// ...
```

参考资料：

- [race](https://rxjs.dev/api/index/function/race)
