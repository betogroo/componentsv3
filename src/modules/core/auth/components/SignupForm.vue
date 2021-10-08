<template>
  <form @submit.prevent="handleSubmit">
    <v-row>
      <v-col cols="12">
        <app-textfield
          v-model="displayName"
          type="text"
          placeholder="Nome de Usuário"
        />
      </v-col>
      <v-col cols="12">
        <app-textfield v-model="email" type="email" placeholder="Email" />
      </v-col>
      <v-col cols="12">
        <app-textfield v-model="password" type="password" placeholder="Senha" />
      </v-col>
      <v-col cols="12">
        <app-textfield
          v-model="passwordConfirm"
          type="password"
          placeholder="Confirme a Senha"
        />
      </v-col>
      <v-col cols="12">
        <app-btn block prepend-icon="mdi-plus">Cadastrar</app-btn>
      </v-col>
    </v-row>
  </form>
  <error-form>{{ error }}</error-form>
</template>

<script>
import { ref } from 'vue'
import { useSignup, useAuthErrors } from '../composables'
import ErrorForm from './ErrorForm'
export default {
  name: 'SignupForm',

  components: {
    ErrorForm
  },

  emits: ['signup'],

  setup(props, { emit }) {
    const { error: signupError, signup } = useSignup()
    const displayName = ref('betogroo')
    const email = ref('betogroo@gmail.com')
    const password = ref('123456')
    const passwordConfirm = ref('123456')

    const { searchError } = useAuthErrors()
    const error = ref('')

    const handleSubmit = async () => {
      await signup(
        displayName.value,
        email.value,
        password.value,
        passwordConfirm.value
      )
      if (!signupError.value) {
        emit('signup')
      } else {
        error.value = searchError(signupError.value)
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
