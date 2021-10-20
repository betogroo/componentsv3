<template>
  <v-slide-x-reverse-transition>
    <app-badge v-if="displayWidth > 400" content="2">
      <app-icon icon="flare" @click="actionItemThree"></app-icon>
    </app-badge>
  </v-slide-x-reverse-transition>
  <v-slide-x-reverse-transition>
    <app-badge v-if="displayWidth > 480" content="11">
      <app-icon icon="magnify" @click="actionItemTwo"></app-icon>
    </app-badge>
  </v-slide-x-reverse-transition>
  <v-slide-x-reverse-transition>
    <app-btn icon variant="text" color="black" @click="actionItemOne">
      <app-icon icon="logout"></app-icon>
    </app-btn>
  </v-slide-x-reverse-transition>
</template>

<script>
import { useLogout } from '@/modules/core/auth/composables'
import { useRouter } from 'vue-router'
export default {
  name: 'NavBarActions',

  props: {
    displayWidth: {
      type: Number,
      default: 600
    }
  },

  setup() {
    const { logout, error } = useLogout()
    const router = useRouter()

    const actionItemOne = async () => {
      await logout()
      if (!error.value) {
        router.push({ name: 'Welcome' })
      }
    }
    const actionItemTwo = () => {
      console.log('ActionItemTwo')
    }
    const actionItemThree = () => {
      console.log('actionItemThree')
    }

    return {
      actionItemOne,
      actionItemTwo,
      actionItemThree
    }
  }
}
</script>
