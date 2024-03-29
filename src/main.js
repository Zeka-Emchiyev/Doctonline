import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'


Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)

import { setupCalendar } from 'v-calendar'

// main.js
setupCalendar({
  componentPrefix: 'vc',
});


import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css';
import * as VueGoogleMaps from 'vue2-google-maps'
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');



Vue.config.productionTip = false
Vue.prototype.$apiUrl = process.env.NODE_ENV === 'development' ? 'http://159.223.22.111' : 'https://admin.drrandevu.az'
// Vue.prototype.$apiUrl = 'https://admin.drrandevu.az'


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAO7iEeDu_Yakre-Pds_k1dmMkXvJYYXhY',
    region: 'en',
    language: 'en',
  },

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
