<template>
  <v-app-bar-title class="pa-0 text-h6" v-bind="$attrs">
    <slot />
  </v-app-bar-title>
</template>

<script>
export default {
  name: 'AppBarTitle'
}
</script>

<style></style>
