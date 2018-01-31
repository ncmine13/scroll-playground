import _ from 'lodash'
import '../styles/main.css.scss'
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

function component() {
  var element = document.createElement('div');

  element.id = ('app')
  return element;
}

document.body.appendChild(component());

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})