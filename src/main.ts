import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";
import ApexCharts from 'apexcharts';
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

import App from './App.vue'
import router from './router'

import * as Sentry from '@sentry/browser'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHouse,
  faMicrochip,
  faWrench,
  faBucket,
  faArrowRotateRight,
  faSpaceStationMoon,
  faTriangleExclamation,
  faTrianglePersonDigging,
  faBackward
} from '@fortawesome/pro-duotone-svg-icons'

library.add(
  faHouse,
  faMicrochip,
  faWrench,
  faBucket,
  faArrowRotateRight,
  faSpaceStationMoon,
  faTriangleExclamation,
  faTrianglePersonDigging,
  faBackward
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN
})

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(VueTailwindDatepicker)
app.config.globalProperties.$apexcharts = ApexCharts;

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $apexcharts: typeof ApexCharts;
  }
}

app.mount('#app')