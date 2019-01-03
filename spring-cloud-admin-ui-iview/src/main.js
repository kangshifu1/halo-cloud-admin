import Vue from 'vue'
import iView from 'iview'

import App from './App.vue'
import router from './router'
import store from './store'

import i18n from '@/locale'
import config from '@/config'


import './style/index.less'

Vue.config.productionTip = false

Vue.prototype.$config = config

Vue.use(iView, {
    i18n: (key, value) => {
        let val = i18n.t(key, value);
        if (val !== null && val !== undefined) return val;
        return '';
    }
});

new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app')
