---
title: 第 4 步：结束流
nav:
  path: /core
  title: 核心概念
  order: 0
order: 3

---

## 第 4 步：结束流

在第 3 步完订阅操作之后，请务必在合适的时机结束流或者取消订阅（通常是组件销毁的时候），否则非常容易出现内存泄漏，很多新手会犯这种错误！

关于如何干净地结束一个流的生命周期，我们分成两个角度来看：

#### 从消费者的角度看，是`取消订阅`

1. ###### 单个流取消订阅

   ```tsx
   import React from "react";
   import { interval, Subscription } from "rxjs";
   
   const stream$ = interval(1000);
   
   interface IState {
     num: number;
   }
   export default class Demo extends React.Component<{}, IState> {
     subscription: Subscription;
     constructor(props) {
       super(props);
       this.state = {
         num: -1
       };
     }
   
     onStop = () => {
       this.subscription?.unsubscribe();
     };
   
     // 组件实例化时订阅数据流
     componentDidMount() {
       this.subscription = stream$.subscribe((num) => {
         this.setState({
           num
         });
       });
     }
   
     // 组件销毁时候取消订阅
     componentWillUnmount() {
       this.subscription?.unsubscribe();
     }
   
     render() {
       return <div>{this.state.num}</div>;
     }
   }
   ```

2. ###### 多个流取消订阅

   ```tsx
   /**
   	* desc: 利用 `Subscription` 支持合并多个的特性
     */
   import React from "react";
   import { interval, Subscription } from "rxjs";
   
   const stream1$ = interval(1000);
   const stream2$ = interval(1000);
   
   interface IState {
     num1: number;
     num2: number;
   }
   export default class Demo extends React.Component<{}, IState> {
     subscription = new Subscription();
     constructor(props) {
       super(props);
       this.state = {
         num1: -1,
         num2: -1
       };
     }
   
     // 组件实例化时订阅数据流
     componentDidMount() {
       this.subscription.add(
         stream1$.subscribe((num1) => {
           this.setState({
             num1
           });
         })
       );
       this.subscription.add(
         stream2$.subscribe((num2) => {
           this.setState({
             num2
           });
         })
       );
     }
   
     // 组件销毁时候取消订阅
     componentWillUnmount() {
       this.subscription?.unsubscribe();
     }
   
     render() {
       return (
         <>
           <div>{this.state.num1}</div>
           <div>{this.state.num2}</div>
         </>
       );
     }
   }
   ```

   

3. ###### 声明式取消订阅（推荐）

   ```tsx
   /**
   	* desc: 利用 `takeUntil` 操作符
     */
   import React from "react";
   import { interval, Subject } from "rxjs";
   import { takeUntil } from "rxjs/operators";
   
   const stream$ = interval(1000);
   
   export default class Demo extends React.Component<{}, { num: number }> {
     destroy$ = new Subject();
     constructor(props) {
       super(props);
       this.state = {
         num: -1
       };
     }
   
     componentDidMount() {
       stream$.pipe(takeUntil(this.destroy$)).subscribe((num) => {
         this.setState({
           num
         });
       });
     }
   
     // 组件销毁时候取消订阅
     componentWillUnmount() {
       this.destroy$.next();
       this.destroy$.complete();
     }
   
     render() {
       return (
         <div>
           <div>{this.state.num}</div>
         </div>
       );
     }
   }
   ```

   

#### 从生产者的角度看，是`结束推送`

1. ###### Observable 结束推送

   ```typescript
   new Observable((subscriber) => {
     subscriber.complete();
   });
   ```

2. ###### Subject 结束推送

   ```typescript
   const stream$ = new Subject();
   
   stream$.complete();
   ```

   