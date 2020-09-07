import { defineConfig } from 'umi';

export default defineConfig({
  // 路由
  routes: [
    { exact: true, path: '/', redirect: '/home' },
    { path: '/home', component: '@/pages/home' },
    { path: '/dashboard', component: '@/pages/dashboard' },
  ],
  // 按需加载配置
  dynamicImport: {
    loading: '@/components/layout/PageLoading',
  },
  nodeModulesTransform: {
    type: 'none',
  },
});
