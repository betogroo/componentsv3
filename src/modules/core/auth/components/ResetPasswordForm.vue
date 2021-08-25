<template>
  <v-card>
    <form @submit.prevent="handleSubmit">
      <input v-model="email" type="email" placeholder="Email" />

      <button type="submit">Redefinir</button>
    </form>
    <h3>{{ error }}</h3>
  </v-card>
</template>

<script>
import { ref } from 'vue'
import useResetPassword from '../composables/useResetPassword'
export default {
  name: 'SignupForm',

  setup() {
    const { error, reset } = useResetPassword()

    const email = ref('')

    const handleSubmit = async () => {
      await reset(email.value)
    }

    return {
      error,

      email,

      handleSubmit
    }
  }
}
</script>

<style></style>
