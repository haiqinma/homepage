import '@/assets/style.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { ensureDefaultLocale } from '@/lang/locale'

ensureDefaultLocale()

createApp(App).use(router).mount('#app')
