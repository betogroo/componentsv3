import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import { fbAuth } from '@/plugins/firebase.js'

let app

fbAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.use(store)
    app.use(vuetify).mount('#app')
  }
})
