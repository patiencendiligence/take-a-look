import { createApp } from 'vue'
import { store } from './store';
import { router } from './router'; // 라우터 추가하고 

import App from './App.vue'

// Create Vue Instance
const app = createApp(App);

app.use(store);
app.use(router); // 사용 설정 하기

app.mount('#app');