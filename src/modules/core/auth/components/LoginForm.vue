<template>
  <form @submit.prevent="handleSubmit">
    <v-row>
      <v-col cols="12">
        <app-textfield
          v-model="email"
          type="text"
          placeholder="Email"
        ></app-textfield>
      </v-col>
      <v-col cols="12">
        <app-textfield
          v-model="password"
          type="password"
          placeholder="Senha"
        ></app-textfield>
      </v-col>
      <v-col cols="12">
        <app-btn block prepend-icon="mdi-login">Entrar</app-btn>
      </v-col>
    </v-row>

    <h3 v-if="error">{{ error }}</h3>
  </form>
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

    return { password, email, error, handleSubmit }
  }
}
</script>

<style></style>
