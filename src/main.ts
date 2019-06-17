import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import MainBody from './components/MainBody.vue';
import Acknowledgments from './components/Acknowledgments.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: MainBody },
  { path: '/acknowledgments', component: Acknowledgments },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
