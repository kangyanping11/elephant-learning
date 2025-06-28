import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from '@/router'

// 导入 Element Plus 组件库图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
