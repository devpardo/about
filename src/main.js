// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import SideNav from './components/SideNav'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  template: `
    <div id="app">
      <SideNav/>
      <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
        <router-view></router-view>
      </transition>
    </div>
  `,
  components: { SideNav },
  router,
  store
}).$mount('#app');
