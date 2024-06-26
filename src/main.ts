import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './style.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
