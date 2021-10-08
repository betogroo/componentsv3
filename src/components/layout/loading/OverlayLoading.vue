<template>
  <v-overlay :absolute="true" :model-value="active">
    <Bars />
  </v-overlay>
</template>

<script>
import { Bars } from '../spinners'
export default {
  name: 'OverlayLoading',

  components: {
    Bars
  },

  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
