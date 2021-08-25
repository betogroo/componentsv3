<template>
  <v-card>
    <v-card-title>Cadastre-se</v-card-title>
    <form @submit.prevent="handleSubmit">
      <input v-model="displayName" type="text" placeholder="Nome de Usuário" />
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="text" placeholder="Senha" />
      <input
        v-model="passwordConfirm"
        type="text"
        placeholder="Confirme a Senha"
      />
      <button type="submit">Cadastrar</button>
    </form>
    <h3>{{ error }}</h3>
  </v-card>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
export default {
  name: 'SignupForm',

  setup(props, { emit }) {
    const { error, signup } = useSignup()
    const displayName = ref('betogroo')
    const email = ref('betogroo@gmail.com')
    const password = ref('123456')
    const passwordConfirm = ref('123456')

    const handleSubmit = async () => {
      await signup(
        displayName.value,
        email.value,
        password.value,
        passwordConfirm.value
      )
      if (!error.value) {
        emit('signup')
      }
    }

    return {
      error,
      displayName,
      email,
      password,
      passwordConfirm,
      handleSubmit
    }
  }
}
</script>

<style></style>
