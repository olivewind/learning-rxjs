import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'RxJS 使用手册',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  favicon:
    'https://user-images.githubusercontent.com/17901361/105580156-a8640600-5dc5-11eb-9cf8-de14475a9d03.png',
  logo:
    'https://user-images.githubusercontent.com/17901361/105580131-8cf8fb00-5dc5-11eb-9d3a-724dda82df58.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  history: {
    type: 'hash',
  },
  base: '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/learning-rxjs/' : '/',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/olivewind/learning-rxjs',
    },
  ],
  // more config: https://d.umijs.org/config
});
