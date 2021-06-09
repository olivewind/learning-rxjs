---
title: ajax
order: 13
group:
  path: /create
  title: 创建流
  order: 1
---

# ajax

```typescript
export interface AjaxCreationMethod {
  <T>(config: AjaxConfig): Observable<AjaxResponse<T>>;

  <T>(url: string): Observable<AjaxResponse<T>>;

  get<T>(
    url: string,
    headers?: Record<string, string>,
  ): Observable<AjaxResponse<T>>;

  post<T>(
    url: string,
    body?: any,
    headers?: Record<string, string>,
  ): Observable<AjaxResponse<T>>;

  put<T>(
    url: string,
    body?: any,
    headers?: Record<string, string>,
  ): Observable<AjaxResponse<T>>;

  patch<T>(
    url: string,
    body?: any,
    headers?: Record<string, string>,
  ): Observable<AjaxResponse<T>>;

  delete<T>(
    url: string,
    headers?: Record<string, string>,
  ): Observable<AjaxResponse<T>>;

  getJSON<T>(url: string, headers?: Record<string, string>): Observable<T>;
}
```

ajax 提供了一系列将 [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) 包装为 Observable 的实用方法。

事实上 get、post、put、patch、delete 、getJSON 等方法都是对原始 ajax 方法的再次封装，这一点从源码中很容易看出

```typescript
function ajaxGet<T>(
  url: string,
  headers?: Record<string, string>,
): Observable<AjaxResponse<T>> {
  return ajax({ method: 'GET', url, headers });
}

function ajaxPost<T>(
  url: string,
  body?: any,
  headers?: Record<string, string>,
): Observable<AjaxResponse<T>> {
  return ajax({ method: 'POST', url, body, headers });
}

function ajaxDelete<T>(
  url: string,
  headers?: Record<string, string>,
): Observable<AjaxResponse<T>> {
  return ajax({ method: 'DELETE', url, headers });
}

function ajaxPut<T>(
  url: string,
  body?: any,
  headers?: Record<string, string>,
): Observable<AjaxResponse<T>> {
  return ajax({ method: 'PUT', url, body, headers });
}

function ajaxPatch<T>(
  url: string,
  body?: any,
  headers?: Record<string, string>,
): Observable<AjaxResponse<T>> {
  return ajax({ method: 'PATCH', url, body, headers });
}
```

源码位置：[src/internal/ajax/ajax.ts#L138](https://github.com/ReactiveX/rxjs/blob/4f4ac0074b4bc8aead728e2fa7aa0a9061f56f0b/src/internal/ajax/ajax.ts#L138)

### 使用例子

**使用 ajax() 获取从 API 返回的响应对象**

```typescript
import { ajax } from 'rxjs/ajax';

ajax('https://api.github.com/repos/olivewind/learning-rxjs').subscribe(
  res => {
    console.log(res.response);
  },
  err => {
    console.error(err);
  },
);
```

**使用 ajax.getJSON() 从 API 获取数据**

```typescript
import { ajax } from 'rxjs/ajax';

ajax.getJSON('https://api.github.com/repos/olivewind/learning-rxjs').subscribe(
  res => {
    console.log(res);
  },
  err => {
    console.error(err);
  },
);
```

**直接使用 delete 方法**

```typescript
import { ajax } from 'rxjs/ajax';

ajax.delete('https://api.github.com/users/1').subscribe(
  res => {
    console.log(res);
  },
  err => {
    console.error(err);
  },
);
```

**传递更多 ajax 参数**

```typescript
import { ajax } from 'rxjs/ajax';

ajax({
  url: 'https://api.github.com/repos/olivewind/learning-rxjs',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).subscribe(
  res => {
    console.log(res);
  },
  err => {
    console.error(err);
  },
);
```

<br/>

参考资料：

- [ajax](https://rxjs.dev/api/ajax/ajax)
