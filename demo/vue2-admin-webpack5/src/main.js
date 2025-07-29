import Vue from 'vue'
import App from './App.vue'
import router from './router';

// 引入 Tailwind CSS
import '@/assets/css/tailwind.css';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
