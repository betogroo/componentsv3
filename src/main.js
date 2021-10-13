import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import { fbAuth, onAuthStateChanged } from '@/plugins/firebase.js'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  './components/app',
  false,
  /App[A-Z]\w+\.(vue|js)$/
)

let app

onAuthStateChanged(fbAuth, () => {
  if (!app) {
    app = createApp(App)
    requireComponent.keys().forEach((fileName) => {
      const componentConfig = requireComponent(fileName)
      const componentName = upperFirst(
        camelCase(
          fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
      )

      app.component(componentName, componentConfig.default || componentConfig)
    })
    app.use(router)
    app.use(store)
    app.use(vuetify).mount('#app')
  }
})
