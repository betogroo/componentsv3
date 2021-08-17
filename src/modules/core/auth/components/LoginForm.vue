<template>
  <v-card>
    <v-card-title>Entre</v-card-title>
    <form @submit.prevent="handleSubmit">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Senha" />
      <button type="submit">Entrar</button>
    </form>
  </v-card>
</template>

<script>
import { ref } from 'vue'
import useLogin from '@/modules/core/auth/composables/useLogin'
export default {
  name: 'SifnupForm',

  setup(props, { emit }) {
    const { error, login } = useLogin()
    const email = ref('betogroo@gmail.com')
    const password = ref('123456')

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        emit('login')
      }
    }

    return { password, email, handleSubmit }
  }
}
</script>

<style></style>
