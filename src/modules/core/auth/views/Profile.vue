<template>
  <h1>Perfil - {{ id }}</h1>
</template>

<script>
export default {
  name: 'Profile',

  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
