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
      elevation: 0
    }))

    return { cardDefaults }
  }
}
</script>

<style></style>
