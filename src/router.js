import dynamic from '@/src/utils/dynamic';

const HomePage = dynamic('@/pages/home');
const DashboardPage = dynamic('@/pages/dashboard');

export default [
  { exact: true, path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/dashboard', component: DashboardPage },
];
