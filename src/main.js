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
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
