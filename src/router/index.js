import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '@/views/Home'
import EditComponent from '@/components/customer/Edit'
import CreateComponent from '@/components/customer/Create'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name:'home' }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/create',
    name: 'Create',
    component: CreateComponent
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: EditComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
