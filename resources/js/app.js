require('./bootstrap');
import Vue from 'vue/dist/vue';
window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './views/App.vue';

Vue.use(VueAxios, axios);

import Admin from './views/admin/Index.vue';
import Login from './views/auth/Login.vue';

const routes = [
    {
        name: 'admin',
        path: '/admin',
        component: Admin
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');