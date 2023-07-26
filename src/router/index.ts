import { createRouter, createWebHistory } from 'vue-router'
// Layouts
import PublicLayout from '../components/layouts/PublicLayout.vue'
import PrivateLayout from '../components/layouts/PrivateLayout.vue'
// Views
import AboutView from '../domains/about/views/AboutView.vue'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../domains/home/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'home',
      component: PrivateLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/',
      name: 'public',
      component: PublicLayout,
      children: [
        {
          path: '/about',
          name: 'about',
          component: AboutView
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../domains/about/views/AboutView.vue')
    // }
  ]
})

export default router
