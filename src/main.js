import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
    faWeixin,
} from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';

library.add(
    faUser,
    faWeixin,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    render: function (h) {
        return h(App);
    },
}).$mount('#app');
