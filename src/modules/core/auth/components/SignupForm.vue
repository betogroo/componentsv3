<template>
  <form @submit.prevent="handleSubmit">
    <v-row>
      <v-col cols="12">
        <app-textfield
          v-model="displayName"
          prepend-icon="account"
          type="text"
          placeholder="Nome de Usuário"
        />
      </v-col>
      <v-col cols="12">
        <app-textfield
          v-model="email"
          prepend-icon="email"
          type="email"
          placeholder="Email"
        />
      </v-col>
      <v-col cols="12">
        <app-textfield
          v-model="password"
          prepend-icon="lock"
          type="password"
          placeholder="Senha"
        />
      </v-col>
      <v-col cols="12">
        <app-textfield
          v-model="passwordConfirm"
          prepend-icon="lock"
          type="password"
          placeholder="Confirme a Senha"
        />
      </v-col>
      <v-col cols="12">
        <app-btn loading block prepend-icon="mdi-plus">Cadastrar</app-btn>
      </v-col>
    </v-row>
  </form>
  <error-form>{{ error }}</error-form>
  <overlay-loading :active="isPending"></overlay-loading>
</template>

<script>
import { ref } from 'vue'
import { useSignup, useAuthErrors } from '../composables'
import ErrorForm from './ErrorForm'
import { OverlayLoading } from '@/components/layout/loading'
export default {
  name: 'SignupForm',

  components: {
    ErrorForm,
    OverlayLoading
  },

  emits: ['signup'],

  setup(props, { emit }) {
    const { error: signupError, isPending, signup } = useSignup()
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
      isPending,
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
