import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material' 
import 'vue-material/dist/vue-material.css'
import moment from 'moment';
require('moment/locale/fr')
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueMaterial);
Vue.use(require('vue-moment'), {
  moment
});
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    cats: 0
  },
  mutations: {
    majCats (state, payload) {
      state.cats = payload
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
