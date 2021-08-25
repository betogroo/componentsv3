<template>
  <div>
    <h1>Home</h1>
    <h1 v-if="loggedUser">{{ loggedUser.email }}</h1>
  </div>
</template>

<script>
import { computed } from 'vue'
import store from '@/store'
export default {
  name: 'Home',

  setup() {
    const loggedUser = computed(() => {
      return store.state.auth.loggedUser
    })

    return { loggedUser }
  }
}
</script>
