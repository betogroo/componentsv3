<template>
  <v-app-bar density="compact">
    <v-app-bar-title>Components V3</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-divider inset vertical></v-divider>

    <div v-if="loggedUser">
      <v-btn
        class="mr-4 ml-5"
        color="primary"
        plain
        @click.prevent="goToProfile"
      >
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
import { useRouter } from 'vue-router'
import { useLogout } from '@/modules/core/auth/composables'
export default {
  name: 'NavBar',

  props: {
    loggedUser: {
      type: Object,
      required: true
    }
  },

  setup() {
    const router = useRouter()
    const { error, logout } = useLogout()

    const handleClick = async () => {
      await logout()
      if (!error.value) {
        router.push({ name: 'Welcome' })
      }
    }

    const goToLogin = () => {
      router.push({ name: 'Welcome' })
    }
    const goToProfile = () => {
      router.push({ path: '/profile' })
    }

    return { handleClick, goToLogin, goToProfile }
  }
}
</script>

<style></style>
