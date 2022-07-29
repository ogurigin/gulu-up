import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        component:()=> import('@/views/index.vue'),
    },
    {
        path:'/login',
        component:()=> import('@/views/login.vue'),
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;