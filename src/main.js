import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
