<template>
  <v-slide-x-reverse-transition>
    <app-icon
      v-if="displayWidth > 400"
      icon="flare"
      @click="actionItemOne"
    ></app-icon>
  </v-slide-x-reverse-transition>
  <v-slide-x-reverse-transition>
    <app-icon
      v-if="displayWidth > 480"
      icon="magnify"
      @click="actionItemTwo"
    ></app-icon>
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

<style lang="scss" scoped>
.v-icon {
  margin-left: 8px;
  margin-right: 8px;
}
</style>
