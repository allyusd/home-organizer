/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/no-reserved-component-names */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import PrimeVue from 'primevue/config';
// app.use(PrimeVue);

import Aura from '@primeuix/themes/aura';
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

import Button from "primevue/button"
app.component('Button', Button);

import ImageCompare from 'primevue/imagecompare';
app.component('ImageCompare', ImageCompare);

import Image from 'primevue/image';
app.component('Image', Image);

app.mount('#app')
