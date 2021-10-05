<template>
  <app-card>
    <v-card-title>Entre</v-card-title>
    <div>
      <p>
        {{ email }}
      </p>
      <p>
        {{ password }}
      </p>
    </div>
    <form @submit.prevent="handleSubmit">
      <app-textfield
        v-model="email"
        type="text"
        placeholder="Email"
      ></app-textfield>
      <app-textfield
        v-model="password"
        type="password"
        placeholder="Senha"
      ></app-textfield>

      <app-btn prepend-icon="mdi-login">Entrar</app-btn>
      <h3 v-if="error">{{ error }}</h3>
    </form>
  </app-card>
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
