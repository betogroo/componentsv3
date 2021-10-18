<template>
  <v-card class="ma-2" v-bind="($attrs, cardDefaults)">
    <slot />
  </v-card>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'AppCard',

  setup() {
    const cardDefaults = computed(() => ({
      elevation: 2,
      width: 300
    }))

    return { cardDefaults }
  }
}
</script>

<style></style>
