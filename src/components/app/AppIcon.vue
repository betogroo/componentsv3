<template>
  <v-icon class="mx-2" v-bind="$attrs">
    {{ `mdi-${icon}` }}
  </v-icon>
</template>

<script>
export default {
  name: 'AppIcon',

  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
