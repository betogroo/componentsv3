<template>
  <v-app-bar density="compact">
    <v-app-bar-title>Components V3</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-divider inset vertical></v-divider>

    <div v-if="user">
      <v-btn class="mr-4 ml-5" color="primary" plain>
        <v-icon left icon="mdi-handshake-outline"></v-icon>

        <span>{{ loggedUser ? loggedUser.displayName : 'nada' }}</span>
      </v-btn>
      <v-btn @click.prevent="handleClick">Sair</v-btn>
    </div>
    <div v-else>
      <v-btn @click.prevent="goToLogin">Login</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { computed } from 'vue'
import router from '@/router'
import useLogout from '@/modules/core/auth/composables/useLogout'
import getUser from '@/modules/core/auth/composables/getUser'
import store from '@/store'
export default {
  name: 'NavBar',

  setup() {
    const { error, logout } = useLogout()
    const { user } = getUser()
    const loggedUser = computed(() => {
      return store.state.auth.loggedUser
    })

    const handleClick = async () => {
      await logout()
      if (!error.value) {
        console.log('User logout')
      }
    }

    const goToLogin = () => {
      router.push({ name: 'Welcome' })
    }

    return { loggedUser, handleClick, user, goToLogin }
  }
}
</script>

<style></style>
