---
title: 第 4 步：结束流
order: 3
---## 第 4 步：结束流

关于如何干净地结束一个流的生命周期，我们分成两个角度来看：

##### 从消费者的角度看，是`取消订阅`

1. 编程式取消订阅：

   ```typescript
   import { interval, Subscription } from 'rxjs';

   const stream$ = interval(1000);

   // 产生订阅
   this.subscription = stream$.subscribe(num => {
     console.log(num);
   });

   //取消订阅
   this.subscription?.unsubscribe();
   ```

   在遇到多个流时候可以组合 `Subscription`

   ```typescript
   import { interval, Subscription } from 'rxjs';

   const subscription = new Subscription();
   const stream1$ = interval(1000);
   const stream2$ = interval(1000);

   // 产生多个订阅
   this.subscription.add(
     stream1$.subscribe(num1 => {
       console.log(num1);
     }),
   );
   this.subscription.add(
     stream2$.subscribe(num2 => {
       console.log(num2);
     }),
   );

   //取消订阅
   this.subscription?.unsubscribe();
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

ok，到现在为止，你已经了解入门了 Rxjs，现在让我们开始深入学习[数据流的创建](/streams/observable)。
