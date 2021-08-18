<template>
  <v-app>
    <template v-if="!currentRoute.meta.hideNav">
      <nav-bar />
    </template>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { computed } from 'vue'
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

    return { currentRoute }
  }
}
</script>
