import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'Accueil', component: () => import('../views/HomeView.vue')
    },
    {
      path: '/agence-web', name: 'Notre-agence-web',component: () => import('../views/AgenceView.vue')
    },
    {
      path: '/carte-plongee', name: 'carte-plongée',component: () => import('../views/MapClubPlongee.vue')
    },
    {
      path: '/encyclopedie-poisson', name: 'Encyclopedie-poisson',component: () => import('../views/EncyclopediePoisson.vue')
    },
    {
      path: '/contact', name: 'Nous-contacter',component: () => import('../views/ContactView.vue')
    }
  ],
})

export default router
