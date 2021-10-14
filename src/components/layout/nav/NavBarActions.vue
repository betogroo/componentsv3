<template>
  <v-slide-x-reverse-transition>
    <app-badge v-if="displayWidth > 400" content="2">
      <app-icon icon="magnify" @click="actionItemTwo"></app-icon>
    </app-badge>
  </v-slide-x-reverse-transition>
  <v-slide-x-reverse-transition>
    <app-badge v-if="displayWidth > 480" content="11">
      <app-icon icon="magnify" @click="actionItemTwo"></app-icon>
    </app-badge>
  </v-slide-x-reverse-transition>
  <v-slide-x-reverse-transition>
    <app-icon
      v-if="displayWidth > 560"
      icon="email"
      @click="actionItemThree"
    ></app-icon>
  </v-slide-x-reverse-transition>
</template>

<script>
export default {
  name: 'NavBarActions',

  props: {
    displayWidth: {
      type: Number,
      default: 600
    }
  },

  setup() {
    const actionItemOne = () => {
      console.log('ActionItemOne')
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
