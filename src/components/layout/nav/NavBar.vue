<template>
  <app-bar density="compact">
    <app-bar-nav-icon></app-bar-nav-icon>
    <app-bar-title>Components V3</app-bar-title>
    <app-spacer></app-spacer>
    <div v-if="loggedUser">
      <app-btn variant="text" @click="gotoProfile">{{
        loggedUser.displayName
      }}</app-btn>
      <app-btn variant="text" @click="handleClick">Sair</app-btn>
    </div>
    <div v-else>
      <app-btn variant="text" @click="gotoLogin">Login</app-btn>
    </div>
  </app-bar>
</template>

<script>
import { useRouter } from 'vue-router'
import { useLogout } from '@/modules/core/auth/composables'
import { AppBar, AppBarNavIcon, AppBarTitle } from './app'
export default {
  name: 'NavBar',

  components: {
    AppBar,
    AppBarNavIcon,
    AppBarTitle
  },

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

    const gotoLogin = () => {
      router.push({ name: 'Welcome' })
    }
    const gotoProfile = () => {
      router.push({ path: '/profile' })
    }

    return { handleClick, gotoLogin, gotoProfile }
  }
}
</script>

<style></style>
