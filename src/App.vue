<template>
  <v-app>
    <template v-if="loggedUser">
      <nav-bar />
    </template>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { computed } from 'vue'
import store from '@/store'
import router from '@/router'
import NavBar from '@/components/core/nav/NavBar'
export default {
  name: 'App',

  components: {
    NavBar
  },

  setup() {
    const currentRoute = computed(() => {
      return router.currentRoute.value
    })
    const loggedUser = computed(() => {
      return store.state.auth.loggedUser
    })

    return { currentRoute, loggedUser }
  }
}
</script>
