import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    }, {
      path: '/end',
      name: 'end',
      component: () => import('./views/End.vue')
    }, {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
