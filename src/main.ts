import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const apps = createApp(App);
apps.use(router).mount('#app');
