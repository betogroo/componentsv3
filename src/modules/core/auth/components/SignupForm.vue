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
        <app-textfield v-model="password" type="text" placeholder="Senha" />
      </v-col>
      <v-col cols="12">
        <app-textfield
          v-model="passwordConfirm"
          type="text"
          placeholder="Confirme a Senha"
        />
      </v-col>
      <v-col cols="12">
        <app-btn block prepend-icon="mdi-plus">Cadastrar</app-btn>
      </v-col>
    </v-row>
  </form>
  <h3>{{ error }}</h3>
</template>

<script>
import { ref } from 'vue'
import { useSignup } from '../composables'
export default {
  name: 'SignupForm',

  emits: ['signup'],

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
