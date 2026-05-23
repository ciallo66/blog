import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useThemeStore } from '@/stores/theme'
import '@/assets/styles/global.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

// 挂载前恢复主题，避免闪烁
const themeStore = useThemeStore(pinia)
themeStore.init()

app.mount('#app')
