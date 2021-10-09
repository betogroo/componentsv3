import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import {
  VApp,
  VMain,
  VCol,
  VRow,
  VCard,
  VBtn,
  VOverlay,
  VIcon,
  VAppBar,
  VAppBarTitle,
  VDivider,
  VSpacer
} from 'vuetify/lib/components'
// import * as directives from 'vuetify/lib/directives'

export default createVuetify({
  display: {
    mobileBreakpoint: 'md'
  },
  components: {
    VApp,
    VMain,
    VCol,
    VRow,
    VCard,
    VBtn,
    VOverlay,
    VIcon,
    VAppBar,
    VAppBarTitle,
    VDivider,
    VSpacer
  }
  // directives
})
