import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Learning Rxjs',
  favicon: 'https://rxjs-dev.firebaseapp.com/assets/images/favicons/favicon.ico',
  logo: 'https://rxjs-dev.firebaseapp.com/assets/images/logos/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  history: {
    type: 'hash'
  },
  base: '/learning-rxjs/',
  publicPath: process.env.NODE_ENV === 'production' ? '/learning-rxjs/' : '/',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/olivewind/learning-rxjs',
    }
  ],
  // more config: https://d.umijs.org/config
});
