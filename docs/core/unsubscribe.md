---
title: 第 4 步：结束流
order: 3
---

## 第 4 步：结束流

关于如何干净地结束一个流的生命周期，我们分成两个角度来看：

##### 从消费者的角度看，是`取消订阅`

1. 编程式取消订阅：

   ```typescript
   import { interval } from 'rxjs';

   const stream$ = interval(1000);

   // 产生订阅
   const subscription = stream$.subscribe(num => {
     console.log(num);
   });

   //取消订阅
   subscription.unsubscribe();
   ```

   可以组合多个 `Subscription` 统一取消

   ```typescript
   import { interval, Subscription } from 'rxjs';

   const subscription = new Subscription();
   const stream$ = interval(1000);

   // 产生订阅
   subscription.add(
     stream$.subscribe(num1 => {
       console.log(num1);
     }),
   );

   // 产生订阅
   subscription.add(
     stream$.subscribe(num2 => {
       console.log(num2);
     }),
   );

   // 统一取消订阅
   subscription.unsubscribe();
   ```

2. 声明式取消订阅：

   ```typescript
   import React from 'react';
   import { interval, Subject } from 'rxjs';
   import { takeUntil } from 'rxjs/operators';

   const stream$ = interval(1000);
   const destroy$ = new Subject();

   stream$.pipe(takeUntil(destroy$)).subscribe(num => {
     console.log(num2);
   });

   // 取消订阅
   destroy$.next();
   destroy$.complete();
   ```

##### 从生产者的角度看，是`结束推送`

1. Observable 结束推送

   ```typescript
   new Observable(subscriber => {
     subscriber.complete();
   });
   ```

2. Subject 结束推送

   ```typescript
   const stream$ = new Subject();

   stream$.complete();
   ```

ok，到现在为止，你已经简单了解 RxJS 基本概念，现在让我们开始学习一些实用的[数据流创建](/streams/start)。
