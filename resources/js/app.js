require('./bootstrap');

require('alpinejs');

import Vue from 'vue/dist/vue.js';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

var app = new Vue({
    el: '#app',
    data() {
        return {
            open : false
        }
    },
    methods: {
        // 
    },
}); 
