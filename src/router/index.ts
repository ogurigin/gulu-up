import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path:'/login',
        component:()=> import('@/login'),
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;