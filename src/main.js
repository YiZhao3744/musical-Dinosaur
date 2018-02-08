// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import vueTap from 'v-tap'; // 引入插件
Vue.use( vueTap );

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css';
Vue.use(ElementUI,{size:'small'});

import Three from 'three';
import Babylon from 'babylon';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el : '#app',
  router,
  components : { App },
  template : '<App/>',
  render : h=>h( App )
})
