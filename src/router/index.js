
import { createRouter, createWebHashHistory } from 'vue-router'
// "/* webpackChunkName:'mycomp' */ "的作用是将文件打包在同一个异步块'mycomp'中
const routes = [
    {
        path: '/',
        name:"HomePage",
        //一级导航
        component: ()=>import(/* webpackChunkName:'mycomp' */'../views/Home.vue')
    },
    {
        path: '/first',
        name:'FirstPage',
        component: ()=>import(/* webpackChunkName:'mycomp' */'../views/First.vue')
    },
    {
        path: '/second',
        name:'SecondPage',
        component: ()=>import(/* webpackChunkName:'mycomp' */'../views/Second.vue')
    },
    {
        path: '/third',
        name:'ThirdPage',
        component: ()=>import(/* webpackChunkName:'mycomp' */'../views/Third.vue')
    }
]
export const router=createRouter({
    history:createWebHashHistory(),
    routes:routes
})
export default router;

