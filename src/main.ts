import { createApp } from 'vue'
import App from './App.vue'

// 引入 Vue DevUI 组件库及样式
import DevUI from 'vue-devui'
import 'vue-devui/style.css'

createApp(App).use(DevUI).mount('#app')
