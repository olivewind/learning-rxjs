import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'RxJS 使用手册',
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
      content: 'Rxjs,rxjs,文档,教程',
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
  // more config: https://d.umijs.org/config
});
