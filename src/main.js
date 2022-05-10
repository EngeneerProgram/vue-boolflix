import Vue from 'vue'
import CountryFlag from 'vue-country-flag'
import App from './App.vue'

const bootstrap = require("bootstrap");
Vue.use(bootstrap)
Vue.config.productionTip = false
Vue.component('country-flag', CountryFlag);
new Vue({
  render: h => h(App),
}).$mount('#app')


