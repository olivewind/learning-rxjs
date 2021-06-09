---
title: generate
group:
  path: /create
  title: 创建流
  order: 1
order: 14
---

# generate

```ts
generate<T, S>(initialStateOrOptions: S | GenerateOptions<T, S>, condition?: ConditionFunc<S>, iterate?: IterateFunc<S>, resultSelectorOrScheduler?: SchedulerLike | ResultFunc<S, T>, scheduler?: SchedulerLike): Observable<T>
```

generater 可以通过运行产生序列元素的状态驱动循环来生成可观察序列，它接受至少 3 个参数：

1. 第一个参数：起始状态

2. 第二个参数：终止条件

3. 第三个参数：迭代函数

这就像是 JavaScript 中的 for 循环

```typescript
for(起始状态, 终止条件, 迭代函数) {
  // do something
}
```

比如在 JavaScript 中我们要循环 1 到 100

```typescript
for (let i = 0; i <= 10; i += 1) {
  console.log(i);
  // do something
}
```

使用 generate 的写法就变成下面这样

```typescript
import { generate } from 'rxjs';

generate(
  0,
  i => i < 10,
  i => i + 1,
).subscribe(res => {
  console.log(res);
});
```

<br/>

参考资料：

- [generate](https://rxjs.dev/api/index/function/generate)
