import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import {
  VApp,
  VBadge,
  VMain,
  VCol,
  VRow,
  VCard,
  VCardTitle,
  VBtn,
  VOverlay,
  VIcon,
  VAppBar,
  VAppBarNavIcon,
  VAppBarTitle,
  VDivider,
  VSpacer,
  VSlideXReverseTransition,
  VExpandTransition
} from 'vuetify/lib/components'
// import * as directives from 'vuetify/lib/directives'
console.log(VSpacer)
export default createVuetify({
  display: {
    mobileBreakpoint: 'md'
  },
  components: {
    VApp,
    VBadge,
    VMain,
    VCol,
    VRow,
    VCard,
    VCardTitle,
    VBtn,
    VOverlay,
    VIcon,
    VAppBar,
    VAppBarNavIcon,
    VAppBarTitle,
    VDivider,
    VSpacer,
    VSlideXReverseTransition,
    VExpandTransition
  }
  // directives
})
