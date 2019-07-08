import Vue from 'vue';

export default [
    {
        name: 'home',
        path: '',
        component: Vue.component('Confidence-home', () => import('./Pages/Home.vue')),
    },

];
