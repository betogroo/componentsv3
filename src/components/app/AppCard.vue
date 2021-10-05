<template>
  <v-card v-bind="($attrs, cardDefaults)">
    <slot />
  </v-card>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'AppCard',

  setup() {
    const cardDefaults = computed(() => ({
      color: 'primary',
      variant: 'outlined'
    }))

    return { cardDefaults }
  }
}
</script>

<style></style>
