import { createApp } from 'vue'

import App from './App.vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/scss/library.scss';
import router from './router'
import i18n from './i18n'

// font-awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faUserSecret, faTwitter)


createApp(App).use(i18n).use(router).use(Antd).component('font-awesome-icon', FontAwesomeIcon).mount('#app')



