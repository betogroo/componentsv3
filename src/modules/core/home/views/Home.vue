<template>
  <div>
    <h1>Home</h1>
    <h1 v-if="loggedUser">{{ loggedUser.email }}</h1>
    <div v-if="loggedUser">
      <app-btn variant="text" @click="gotoProfile">{{
        loggedUser.displayName
      }}</app-btn>
      <app-btn variant="text" @click="handleClick">Sair</app-btn>
    </div>
    <div v-else>
      <app-btn variant="text" @click="gotoLogin">Login</app-btn>
    </div>
    <div>
      <router-link
        v-for="item in inNavRoutes"
        :key="item.path"
        :to="{ path: item.path }"
        >{{ item.title }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useUtils } from '@/composables'
import { useLogout } from '@/modules/core/auth/composables'
export default {
  name: 'Home',

  setup() {
    const store = useStore()
    const { filteredRoutes } = useUtils()
    const inNavRoutes = filteredRoutes('inNav')
    const loggedUser = computed(() => {
      return store.state.auth.loggedUser
    })
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

    return { inNavRoutes, loggedUser, handleClick, gotoLogin, gotoProfile }
  }
}
</script>
