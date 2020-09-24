import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = (resolve) => {
  import('@/views/Login').then((module) => {
    resolve(module)
  })
}

const Home = (resolve) => {
  import('@/views/Home').then((module) => {
    resolve(module)
  })
}

const LoginForm = (resolve) => {
  import('@/components/LoginForm').then((module) => {
    resolve(module)
  })
}

const RegisterForm = (resolve) => {
  import('@/components/RegisterForm').then((module) => {
    resolve(module)
  })
}

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login,
      children: [
        {
          path: '/',
          component: LoginForm
        },
        {
          path: '/register',
          component: RegisterForm
        }
      ]
    }
  ]
})
