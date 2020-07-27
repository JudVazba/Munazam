import Vue from 'vue';
import VueRouter from 'vue-router';
import List from './pages/List/List.vue';
import Add from './pages/Add/Add.vue';

Vue.use(VueRouter);
export const router = new VueRouter({mode:'history',routes:[
   
    {
        path: '/list',
        component: List,

    },
    {
        path:'/add',
        component: Add,
    },
    
]})

