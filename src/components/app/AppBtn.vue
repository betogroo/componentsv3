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

    return { btnDefaults }
  }
}
</script>

<style></style>
