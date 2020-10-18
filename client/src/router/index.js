import VueRouter from 'vue-router'
import Vue from 'vue'
import Category from '../components/Category.vue'
import CategoryList from '../components/CategoryList.vue'
import Article from '../components/Article.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: CategoryList,
      props:true,
    },
    {
        path: '/category/:id',
        name: 'category',
        component: Category,
        props:true,
    },
    {
        path: '/article/:id',
        name: 'article',
        component: Article,
        props:true,
    },
  ]
})

export default router