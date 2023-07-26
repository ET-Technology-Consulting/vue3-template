import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import * as Sentry from "@sentry/browser";

const app = createApp(App)

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
});

app.use(createPinia())
app.use(router)

app.mount('#app')
