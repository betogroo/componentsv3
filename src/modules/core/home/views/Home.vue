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
    <div>{{ x }} - {{ y }}</div>
    <div>{{ breakpoints }}</div>
  </div>
</template>

<script>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useUtils } from '@/composables'
import { useLogout } from '@/modules/core/auth/composables'
import { useMouse, useBreakpoints, breakpointsVuetify } from '@vueuse/core'
export default {
  name: 'Home',

  setup() {
    const store = useStore()
    const { x, y } = useMouse()
    watch(
      () => [x.value, y.value],
      () => {
        if (x.value === 0 || y.value === 0) {
          alert('Não fuja')
        }
      }
    )
    const breakpoints = useBreakpoints(breakpointsVuetify)
    console.log(breakpoints)
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

    return {
      inNavRoutes,
      loggedUser,
      handleClick,
      gotoLogin,
      gotoProfile,
      x,
      y,
      breakpoints
    }
  }
}
</script>
