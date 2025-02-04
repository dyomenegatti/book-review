import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import BookListPage from '@/components/BookListPage.vue'
import BookDetails from '@/components/BookDetails.vue'
import List from '@/components/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/list',
    name: 'BookList',
    component: List
  },
  {
    path: '/book/:id',
    name: 'BookDetails',
    component: BookDetails,
    props: route => ({ id: Number(route.params.id) }),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router