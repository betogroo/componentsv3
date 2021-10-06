<template>
  <div>
    <h1>Home</h1>
    <h1 v-if="loggedUser">{{ loggedUser.email }}</h1>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Home',

  setup() {
    const store = useStore()
    const loggedUser = computed(() => {
      return store.state.auth.loggedUser
    })

    return { loggedUser }
  }
}
</script>
