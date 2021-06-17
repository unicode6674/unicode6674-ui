import Vue from 'vue';
import App from './App.vue';
import Element from '../src/index'
Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
