import Vue from 'vue'
import CountryFlag from 'vue-country-flag'
import App from './App.vue'
import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(farStar, fasStar);
const bootstrap = require("bootstrap");
Vue.use(bootstrap)
Vue.use(rate)
Vue.config.productionTip = false
Vue.component('country-flag', CountryFlag);
new Vue({
  render: h => h(App),
}).$mount('#app')


