import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Student from '../views/student/View.vue'
import StudentCreate from '../views/student/Create.vue'
import Edit from '../views/student/Edit.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/student/create',
      name: 'studentCreate',
      component: StudentCreate
    },
    {
      path: '/student/edit/:id',
      name: 'studentEdit',
      component: Edit
    }
  ]
})

export default router
