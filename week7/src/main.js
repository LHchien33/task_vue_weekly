import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import axios from 'axios'
import VueAxios from 'vue-axios';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css'

import './assets/all.scss';
import { Collapse, Modal } from 'bootstrap';

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize('zh_TW',{
    messages: {
      ...zh_TW.messages
    }
  }),
});
setLocale('zh_TW');

const app = createApp(App);

app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.use(router);
app.use(VueAxios, axios);
app.use(LoadingPlugin);
app.mount('#app');

