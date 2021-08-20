<template>
  <h1>404</h1>
  <v-btn @click.prevent="backPage">Voltar</v-btn>
</template>

<script>
import router from '@/router'
export default {
  name: 'Notfound',

  setup() {
    const backPage = () => {
      router.go(-1)
    }

    return { backPage }
  }
}
</script>

<style></style>
