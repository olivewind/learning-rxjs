import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Learning Rxjs',
  favicon: 'https://rxjs-dev.firebaseapp.com/assets/images/favicons/favicon.ico',
  logo: 'https://rxjs-dev.firebaseapp.com/assets/images/logos/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    }
  ],
  // more config: https://d.umijs.org/config
});
