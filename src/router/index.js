import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pets from '@/components/Pets'
import About from '@/components/About'
import AddPet from '@/components/AddPet'
import Contact from '@/components/Contact'
import Edit from '@/components/Edit'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pets',
      name: 'Pets',
      component: Pets
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/add',
      name: 'Add Pet',
      component: AddPet,
      props: true
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
