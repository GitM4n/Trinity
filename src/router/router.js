import { createRouter, createWebHashHistory } from "vue-router";

import homepage from '../pages/HomePage.vue'
import CarList from '../pages/CarList.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactUs from '../pages/ContactUs.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            component: homepage,
            name:'Home',
        },
        {
            path:'/cars',
            component: CarList,
            name:['Car List'],
           
        },
        {
            path:'/about',
            component: AboutPage,
            name:['About'],
           
        },
        {
            path:'/contact',
            component: ContactUs,
            name:['Contact Us'],
           
        },

     
    ]
})