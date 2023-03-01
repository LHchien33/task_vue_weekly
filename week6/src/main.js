import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import './assets/all.scss'
import { Collapse } from 'bootstrap'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.use(LoadingPlugin)

app.mount('#app')
