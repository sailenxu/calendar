import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueMinderEditor from 'vue-minder-editor-plus';

Vue.use(ElementUI);
Vue.use(vueMinderEditor);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
