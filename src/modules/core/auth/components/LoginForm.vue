<template>
  <form @submit.prevent="handleSubmit">
    <v-row>
      <v-col cols="12">
        <app-textfield
          v-model="email"
          prependIcon="email"
          type="text"
          placeholder="Email"
        ></app-textfield>
      </v-col>
      <v-col cols="12">
        <app-textfield
          v-model="password"
          prependIcon="lock"
          type="password"
          placeholder="Senha"
        ></app-textfield>
      </v-col>
      <v-col cols="12">
        <app-btn block prepend-icon="mdi-login">Entrar</app-btn>
      </v-col>
    </v-row>
    <error-form>{{ error }}</error-form>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useLogin, useAuthErrors } from '@/modules/core/auth/composables'
import ErrorForm from './ErrorForm'
export default {
  name: 'LoginForm',

  components: {
    ErrorForm
  },

  emits: ['login'],

  setup(props, { emit }) {
    const { error: loginError, login } = useLogin()
    const { searchError } = useAuthErrors()
    const error = ref('')

    const email = ref('betogroo@gmail.com')
    const password = ref('123456')

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!loginError.value) {
        emit('login')
      } else {
        error.value = searchError(loginError.value)
      }
    }

    return { password, email, error, handleSubmit }
  }
}
</script>

<style></style>
