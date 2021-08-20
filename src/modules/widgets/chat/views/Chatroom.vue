<template>
  <h1>Chat</h1>
  <h3>Bem vindo {{ loggedUser ? loggedUser.displayName : null }}</h3>
</template>

<script>
import { computed } from 'vue'
import store from '@/store'
export default {
  name: 'Chatroom',

  setup() {
    const loggedUser = computed(() => {
      return store.state.auth.loggedUser
    })

    return { loggedUser }
  }
}
</script>

<style></style>
