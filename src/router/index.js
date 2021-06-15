import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    // },
    {
        path: '/registrar',
        name: 'Registrar',
        component: () => import(/* webpackChunkName: "registrar" */ '../views/Registrar.vue')
    },
    {
        path: '/header',
        name: 'Header',
        component: () => import(/* webpackChunkName: "registrar" */ '../views/Header.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "Actualizar" */ '../views/Settings.vue')
    },
    {
        path: '/tareas',
        name: 'Calendar',
        component: () => import(/* webpackChunkName: "Calendario" */ '../views/Calendar.vue')
    },
    {
        path: '/createTask',
        name: 'CreateTask',
        component: () => import(/* webpackChunkName: "Calendario" */ '../views/TaskRegister.vue')
    },
    {
        path: '/notifications',
        name: 'Notifications',
        component: () => import(/* webpackChunkName: "Calendario" */ '../views/Footbal.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
