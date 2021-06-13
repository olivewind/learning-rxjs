---
title: concat
order: 1
group:
  path: /join
  title: 复合流
  order: 2
---

# concat

```typescript
concat(...args: any[]): Observable<unknown>
```

![concat](./images/concat.png)

concat 会将多个数据流按照顺序合并成一个流（output\$）

1. 上一个流完成了，才会订阅下一个流
2. 当最后一个流都完成了，output\$ 才会完成

### 使用例子

```typescript
import { concat, of } from 'rxjs';

const a$ = of(1, 2, 3);

const b$ = of(4, 5, 6);

const output$ = concat(a$, b$);

output$.subscribe(x => {
  console.log(x);
});

// 1
// 2
// 3
// 4
// 5
// 6
```

参考资料：

- [concat](https://rxjs.dev/api/index/function/concat)
