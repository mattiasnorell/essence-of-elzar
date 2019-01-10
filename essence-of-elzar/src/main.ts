import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-material/dist/vue-material.min.css';

Vue.config.productionTip = false;

import { MdApp, MdDrawer, MdButton, MdIcon, MdList, MdToolbar } from 'vue-material/dist/components';
import SearchBar from '@/components/SearchBar.vue';
Vue.use(MdApp);
Vue.use(MdIcon);
Vue.use(MdDrawer);
Vue.use(MdList);
Vue.use(MdToolbar);
Vue.use(MdButton);

Vue.component('SearchBar', SearchBar);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
