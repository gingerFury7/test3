import Vue from 'vue'
import Main_page from './Main_page.vue'
import router from '@/router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(BootstrapVue)

new Vue({
    router,
    render: h => h(Main_page)
}).$mount('#app')