import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import RulesView from '../views/Rules.vue'
import MembershipView from '../views/Membership.vue'
import AboutView from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView,
    },
    {
      path: '/membership',
      name: 'membership',
      component: MembershipView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
