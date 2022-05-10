import Vue from 'vue'
import CountryFlag from 'vue-country-flag'
import App from './App.vue'
import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'


const bootstrap = require("bootstrap");
Vue.use(bootstrap)
Vue.use(rate)
Vue.config.productionTip = false
Vue.component('country-flag', CountryFlag);
new Vue({
  render: h => h(App),
}).$mount('#app')


