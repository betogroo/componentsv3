<template>
  <v-icon v-bind="$attrs">
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

<style></style>
