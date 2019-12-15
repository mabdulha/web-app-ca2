import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import Pets from '@/components/views/Pets'
import AddPet from '@/components/activities/AddPet'
import Edit from '@/components/activities/Edit'
import Register from '@/components/authentication/Register'
import Login from '@/components/authentication/Login'
import ManagePets from '@/components/activities/ManagePets'

Vue.use(Router)

export default new Router({
  mode: 'history', // to remove the aanoying # in url
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
      path: '/managepets',
      name: 'ManagePets',
      component: ManagePets
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
