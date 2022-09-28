import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.scss'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')
