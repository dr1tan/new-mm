import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router'; // Assuming your router is set up correctly
import './style.scss';
const app = createApp(App);

app.use(router).use(i18n).mount('#app');
