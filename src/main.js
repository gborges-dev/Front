import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Password from 'primevue/password';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSidebarMenu from 'vue-sidebar-menu';



import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primeicons/primeicons.css';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

Vue.use(PrimeVue);
Vue.use(ToastService);
Vue.use(Toast);
Vue.use(VueAxios, axios);
Vue.use(VueSidebarMenu);

Vue.config.productionTip = false

Vue.component('InputText', InputText);
Vue.component('ButtonPV', Button);
Vue.component('SenhaLogin', Password);

new Vue({
  router,
  Toast,
  render: h => h(App)
}).$mount('#app')
