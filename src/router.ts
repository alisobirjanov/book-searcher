import { createRouter, createWebHistory } from 'vue-router'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('./pages/Home.vue')
    },
    {
      name: 'login',
      path: '/login',
      meta: {
        layout: 'empty'
      },
      component: () => import('./pages/Login.vue')
    },
    {
      name: 'book-detail',
      path: '/:id',
      component: () => import('./pages/BookDetail.vue')
    },
  ]
})