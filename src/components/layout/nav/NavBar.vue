<template>
  <app-bar density="comfortable">
    <app-bar-nav-icon
      v-if="!contextual"
      @click="toggleDrawer"
    ></app-bar-nav-icon>
    <app-bar-nav-icon
      v-else
      :icon="!ios ? 'mdi-arrow-left' : 'mdi-chevron-left'"
      @click="$router.back"
    ></app-bar-nav-icon>
    <app-spacer v-if="ios"></app-spacer>
    <app-bar-title>{{ currentRoute.meta.title || 'AppName' }}</app-bar-title>
    <app-spacer></app-spacer>

    <nav-bar-actions
      v-if="!contextual"
      :displayWidth="displayWidth"
    ></nav-bar-actions>

    <app-icon
      class="mr-2"
      :icon="!ios ? 'dots-vertical' : 'dots-horizontal'"
      @click="toggleOverflow"
    >
    </app-icon>
  </app-bar>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { AppBar, AppBarNavIcon, AppBarTitle } from './app'
import NavBarActions from './NavBarActions'
export default {
  name: 'NavBar',

  components: {
    AppBar,
    AppBarNavIcon,
    AppBarTitle,
    NavBarActions
  },

  props: {
    loggedUser: {
      type: Object,
      required: true
    },
    displayWidth: {
      type: Number,
      required: true
    },
    ios: {
      type: Boolean,
      required: true
    }
  },

  setup() {
    const { currentRoute } = useRouter()
    const store = useStore()
    const contextual = computed(() => {
      return store.state.home.contextualAppBar
    })

    const toggleDrawer = () => {
      console.log('ToggleDrawer')
    }

    const toggleOverflow = () => {
      console.log('toggleOverflow')
    }

    return {
      currentRoute,
      contextual,
      toggleDrawer,
      toggleOverflow
    }
  }
}
</script>
