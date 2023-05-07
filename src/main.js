import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import InputForm from '@/components/Form'
import AddressList from '@/components/Address'
import vuetify from './plugins/vuetify';



Vue.use(vueRouter)
Vue.use(vueResource)
Vue.config.productionTip = false

const routes= [
  {name: 'App',path:'/', component:App},
  {name: 'Form',path:'/form', component:InputForm},
  {name: 'Address',path:'/address', component:AddressList}];

const router= new vueRouter({mode:'history',routes:routes})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
