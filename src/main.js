import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import router from './router';

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
  });
  
  
createApp(App).use(router).use(i18n).mount('#app');
