import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/catalog',
    component: () => import('../views/Catalog.vue'),
    children: [
      {
        path: 'desktop',
        component: () => import('../views/products/Desktop.vue'),
      },
      {
        path: 'tab',
        component: () => import('../views/products/Tab.vue'),
      },
      {
        path: 'phone',
        component: () => import('../views/products/Phone.vue'),
      },
      {
        path: 'watch',
        component: () => import('../views/products/Watch.vue'),
      },
      {
        name: 'Card',
        path: 'card/:id',
        component: () => import('../views/products/Card.vue')
      }
    ]
  },
  {
    path: '/form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/basket',
    component: () => import('../views/Basket.vue')
  },
  {
    path: '/',
    component: () => import('../views/Main.vue') 
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
