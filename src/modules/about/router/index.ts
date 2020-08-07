import { RouteConfig } from 'vue-router';
import About from '../views/About.vue';

export const routes: RouteConfig[] = [
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];
