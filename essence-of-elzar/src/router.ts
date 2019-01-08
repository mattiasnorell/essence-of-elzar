import Vue from 'vue';
import Router from 'vue-router';
import Start from './views/Start.vue';
import Search from './views/Search.vue';
import Recipe from './views/Recipe.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/search/',
      props: (route) => ({query: route.query.q}),
      name: 'search',
      component: Search,
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe,
    },
  ],
});
