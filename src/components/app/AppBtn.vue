<template>
  <v-btn v-bind="($attrs, btnDefaults)">
    <slot />
  </v-btn>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'AppBtn',

  setup() {
    const btnDefaults = computed(() => ({
      color: 'primary',
      variant: 'contained',
      type: 'submit'
    }))

    console.log(btnDefaults.value)

    return { btnDefaults }
  }
}
</script>

<style></style>
