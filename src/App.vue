<template>
  <v-app>
    <template v-if="loggedUser">
      <nav-bar
        :ios="platform.ios"
        :displayWidth="displayWidth"
        :loggedUser="loggedUser"
      />
    </template>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useDisplay } from 'vuetify/lib/composables/display'

import { NavBar } from '@/components/layout/nav'
export default {
  name: 'App',

  components: {
    NavBar
  },

  setup() {
    const store = useStore()
    const { width: displayWidth, platform } = useDisplay()

    const loggedUser = computed(() => {
      return store.state.auth.loggedUser
    })

    return { loggedUser, displayWidth, platform }
  }
}
</script>
