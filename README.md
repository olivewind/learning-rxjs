<div align="center">
  <h1>
    📖
    <br />
    《RxJS 渐进式学习指南》
    <br />
    <br />
  </h1>
  <sup>
    <br />
    <a target="_blank" href="http://rxjs.liguo.run">
      <img src="https://img.shields.io/badge/在线阅读-🐌-green.svg" alt="online" />
    </a>
    <a target="_blank" href="http://olivewind.gitee.io/learning-rxjs/#/">
      <img src="https://img.shields.io/badge/国内镜像-🚀-red.svg" alt="china image" />
    </a>
    <br />
   为简化 RxJS 学习曲线而生
  </sup>
  <br />
  <br />
  <br />
  <br />
</div>

**快速入门**

- [`第 0 步：基本概念`](http://olivewind.gitee.io/learning-rxjs/#/core/stream)
- [`第 1 步：创建流`](http://olivewind.gitee.io/learning-rxjs/#/core/observable)
- [`第 2 步：编排流`](http://olivewind.gitee.io/learning-rxjs/#/core/operators)
- [`第 3 步：订阅流`](http://olivewind.gitee.io/learning-rxjs/#/core/subscription)
- [`第 4 步：结束流`](http://olivewind.gitee.io/learning-rxjs/#/core/unsubscribe)

**创建流**

- [`of`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/of)
- [`from`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/from)
- [`timer`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/timer)
- [`interval`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/interval)
- [`range`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/range)
- [`iif`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/iif)
- [`defer`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/defer)
- [`throwError`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/throw-error)
- [`fromEvent`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/from-event)
- [`fromEventPattern`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/from-event-pattern)
- [`bindCallback`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/bind-callback)
- [`bindNodeCallback`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/bind-node-callback)
- [`ajax`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/ajax)
- [`generate`](http://olivewind.gitee.io/learning-rxjs/#/streams/create/generate)

**复合流**

- [`concat`](http://olivewind.gitee.io/learning-rxjs/#/streams/join/concat)
- [`merge`](http://olivewind.gitee.io/learning-rxjs/#/streams/join/merge)
- [`combineLatest`](http://olivewind.gitee.io/learning-rxjs/#/streams/join/combine-latest)
- [`zip`](http://olivewind.gitee.io/learning-rxjs/#/streams/join/zip)
- [`race`](http://olivewind.gitee.io/learning-rxjs/#/streams/join/race)
- [`forkJoin`](http://olivewind.gitee.io/learning-rxjs/#/streams/join/fork-join)
- [`partition`](http://olivewind.gitee.io/learning-rxjs/#/streams/join/partition)

**编排流（正在制作）**

- 转换
  - [`map`](http://olivewind.gitee.io/learning-rxjs/#/operators/transformation/map)
  - [`switchMap`](http://olivewind.gitee.io/learning-rxjs/#/operators/transformation/switch-map)
  - [`mergeMap`](http://olivewind.gitee.io/learning-rxjs/#/operators/transformation/merge-map)
  - [`concatMap`](http://olivewind.gitee.io/learning-rxjs/#/operators/transformation/concat-map)
- 条件
- 筛选
- 工具
- 多播
- 计算
- 合并
- 错误

**高级用法（正在制作）**

- 使用调度器
- 自定义操作符
- 核心源码解析
- 错误排查
- 综合实战
