import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'RxJS 渐进式指南',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  favicon: './logo.png',
  logo: './logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  history: {
    type: 'hash',
  },
  metas: [
    {
      name: 'keywords',
      content: 'RxJS,rxjs,文档,教程',
    },
    {
      name: 'description',
      content: 'RxJS教程,中文文档,使用教程,使用指南',
    },
  ],
  base: '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/learning-rxjs/' : '/',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/olivewind/learning-rxjs',
    },
    {
      title: '国内镜像',
      path: 'http://olivewind.gitee.io/learning-rxjs/#/',
    },
  ],
  styles: [
    `
    html .__dumi-default-navbar {
      background: #c2185b;
    }
    html .__dumi-default-navbar-logo {
      font-size: 22px;
    }
    html .__dumi-default-navbar-logo {
      color: #FFF;
    }
    html .__dumi-default-layout-hero a:last-child button {
      background: #FFF;
      color: #c2185b;
      border: 1px solid #c2185b;
    }
    [data-prefers-color=dark] .__dumi-default-layout-hero a:last-child button {
      color: #FFF;
      background-color: #c2185b;
      border: 1px solid #c2185b;
    }
    html .__dumi-default-layout-hero button:hover {
      opacity: 1.0;
    }
    html .__dumi-default-navbar nav > span > a:hover, .__dumi-default-navbar nav > span > a.active {
      color: #F0F0F0 !important;
    }
    html .__dumi-default-navbar nav > span > a.active::after {
      background-color: #FFF;
    }
    html .__dumi-default-navbar nav > span > a {
      color: #FFF;
    }
    html .__dumi-default-layout-hero {
      padding: 140px 0;
      background: #c2185b;
    }
    html .__dumi-default-layout-hero h1 {
      color: #f3f3f3;
      text-shadow: 0 2px 8px rgba(0,0,0,.3);
    }
    html .__dumi-default-layout-hero .markdown {
      color: #eee;
      text-shadow: 0 2px 5px rgba(0,0,0,.3);
    }
    html .markdown a {
      color: #c2185b !important; 
    }
    html .__dumi-default-layout-footer-meta > a {
      color: #c2185b !important; 
    }
    html .__dumi-default-layout-footer-meta > span:last-child::before {
      color: #c2185b !important; 
    }
    html .markdown *:not(pre) code {
      color: #c2185b !important; 
    }
    html .__dumi-default-menu-inner ul li a:hover, .__dumi-default-menu-inner ul li > span:hover, .__dumi-default-menu-inner ul li a.active, .__dumi-default-menu-inner ul li > span.active {
      color: #c2185b !important; 
    }
    html .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a::after {
      background-color: #c2185b !important;
    }
 
    `,
  ],
  // more config: https://d.umijs.org/config
});
