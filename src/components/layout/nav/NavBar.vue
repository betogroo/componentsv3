<template>
  <app-bar density="comfortable">
    <app-bar-nav-icon @click="toggleDrawer"></app-bar-nav-icon>
    <app-spacer v-if="ios"></app-spacer>
    <app-bar-title>{{ currentRoute.meta.title || 'AppName' }}</app-bar-title>
    <app-spacer></app-spacer>

    <nav-bar-actions :displayWidth="displayWidth"></nav-bar-actions>

    <app-icon
      class="mr-2"
      :icon="!ios ? 'dots-vertical' : 'dots-horizontal'"
      @click="toggleOverflow"
    >
    </app-icon>
  </app-bar>
</template>

<script>
import { AppBar, AppBarNavIcon, AppBarTitle } from './app'
import NavBarActions from './NavBarActions'
import { useRouter } from 'vue-router'
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

    const toggleDrawer = () => {
      console.log('ToggleDrawer')
    }

    const toggleOverflow = () => {
      console.log('toggleOverflow')
    }

    return {
      currentRoute,
      toggleDrawer,
      toggleOverflow
    }
  }
}
</script>
