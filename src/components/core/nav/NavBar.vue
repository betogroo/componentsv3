<template>
  <v-app-bar density="compact">
    <v-app-bar-title>Components V3</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-divider inset vertical></v-divider>

    <v-btn class="mr-4 ml-5" color="primary" plain>
      <v-icon left icon="mdi-handshake-outline"></v-icon>

      <span>{{ loggedUser.displayName }}</span>
    </v-btn>
    <v-btn>Sair</v-btn>
  </v-app-bar>
</template>

<script>
import { computed } from 'vue'
import store from '@/store'
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
