import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: Search,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
