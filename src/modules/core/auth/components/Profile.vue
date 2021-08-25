<template>
  <h1>{{ loggedUser.displayName }}</h1>
</template>

<script>
import store from '@/store'
import { computed } from 'vue'
export default {
  setup() {
    const loggedUser = computed(() => {
      return store.state.auth.loggedUser
    })

    return { loggedUser }
  }
}
</script>

<style></style>
