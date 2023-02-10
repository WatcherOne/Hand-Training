import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import(/* webpackChunkName: "index" */ '@/views/index')

export const routes = [
    {
        path: '',
        name: 'index',
        component: Index,
        alias: ['/', '/index']
    }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes
})

export default router
