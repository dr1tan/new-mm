import DatenschutzView from '@/views/DatenschutzView.vue';
import HomeView from '@/views/HomeView.vue';
import ImpressumView from '@/views/ImpressumView.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Use createWebHashHistory instead of createWebHistory

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: ImpressumView,
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: DatenschutzView,
  },
];

const router = createRouter({
  history: createWebHistory(), // Use hash-based history instead of web history
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
});

export default router;
