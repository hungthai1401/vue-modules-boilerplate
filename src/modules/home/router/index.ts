import { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];
