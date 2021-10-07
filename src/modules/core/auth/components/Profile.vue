<template>
  <h1 v-if="loggedUser">{{ loggedUser.displayName }}</h1>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'Profile',

  setup() {
    const store = useStore()
    const loggedUser = computed(() => {
      return store.state.auth.loggedUser
    })

    return { loggedUser }
  }
}
</script>

<style></style>
