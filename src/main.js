import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import App from './App'
import router from './router'

Vue.use(iView, {
    transfer: true,
    size: 'large'
})

router.afterEach((transition) => {
    document.title = transition.meta.title
})

Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
