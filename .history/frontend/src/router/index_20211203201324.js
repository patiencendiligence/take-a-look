import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/frontend/components/Home'), // 동적 import
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/frontend/components/Login'),
  },
];

// 이렇게 해도 된다.
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
// export default router;

export const router = createRouter({
  history: createWebHistory(),
  routes,
});