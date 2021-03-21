---
title: 数据流
defaultShowCode: true
group:
  path: /basic
  title: 第 0 步：认识概念
  order: 1
---

## 数据流

<!-- 

在讨论数据流之前我特别想要跟大家先探讨几个问题

* React 中视图变更的时机是什么时候？

  这题简单，众所周知 setState ->  diff -> render，因此时机是在执行 setState 的时候（这里不细究同步异步）。

* Vue 中视图变更的时机是什么时候？

  这题也简单，Vue 2 使用 Object.defineProperty，Vue3 使用 Prxoy 代理数据并做依赖收集，只需要变更数据就可以触发视图变更。

* Angular 中视图变更的时机是什么时候？

  ```typescript
  @Component({
    selector: 'app-click-me',
    template: `
      <button (click)="onClickMe()">Click me!</button>
      {{clickMessage}}`
  })
  export class ClickMeComponent {
    clickMessage = '';
  
    onClickMe() {
      // 为啥这样就可以直接触发视图更新了？？？这是什么魔法？？？
      this.clickMessage = 'You are my hero!';
    }
  }
  ```

  很多人都知道 Angular 内部有一套“变更检测”系统，可大部分人都不知道它是怎么工作。其实这背后也没有什么魔法，大家抛开框架仔细想一想在一个前端应用的全生命周期中有哪些时机是需要“变更检测”呢？其实总结来说只有三类：

  1. 用户事件，比如 click，blur，mousemove...
  2. 数据交互，比如 ajax，fetch，websocket...
  3. 异步事件，比如 setTimeout，setInterval，Promise...

  聪明的同学知道应该怎么做了，其实只需要通过 monkey pacth 的方式代理以上这些所有方法就可以监测到应用何时需要做变更检测了，换句话说可以做到“在可能需要变更视图的时候启动变更检测”，而这一切在 Angular 中由 [Zone.js](https://github.com/angular/angular/tree/master/packages/zone.js/) 实现。

  -->

在 MVVM 模式大行其道的年代，核心是 View <-> ViewModel <-> Model 之间的数据流转，如果我们使用传统的编程思维来构建应用，有可能会很棘手，比如下面这个例子

​ “一个输入框，输入的时候同时发起 2 个请求，哪个请求先回来就用哪个，为了保证性能需要加上节流”
