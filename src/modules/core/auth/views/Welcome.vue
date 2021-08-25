<template>
  <h1>{{ title }}</h1>
  <h3>{{ subtitle }}</h3>
  <div v-if="showForm === 'login'" class="d-flex flex-column">
    <login-form @login="gotoHome"></login-form>
    <a @click.prevent="handleForm('signup')"
      >Não tem conta? <strong>Cadastre-se</strong></a
    >
    <a @click.prevent="handleForm('reset')"
      >Esqueceu a senha? <strong>Redefina</strong></a
    >
  </div>
  <div v-if="showForm === 'signup'" class="d-flex flex-column">
    <signup-form @signup="gotoHome"></signup-form>
    <a @click.prevent="handleForm('login')"
      >Já tem conta? <strong>Faça Login</strong></a
    >
  </div>
  <div v-if="showForm === 'reset'" class="d-flex flex-column">
    <reset-password-form></reset-password-form>
    <a @click.prevent="handleForm('login')"
      >Já tem conta? <strong>Faça Login</strong></a
    >
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '@/router'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import ResetPasswordForm from '../components/ResetPasswordForm.vue'
export default {
  name: 'Welcome',

  components: {
    SignupForm,
    LoginForm,
    ResetPasswordForm
  },

  setup() {
    const showForm = ref('login')
    const title = ref('Login')
    const subtitle = ref('Faça o login para ter acesso ao sistema')

    const gotoHome = () => {
      router.push({ name: 'Home' })
    }

    const handleForm = (form) => {
      showForm.value = form
      if (form === 'login') {
        title.value = 'Login'
        subtitle.value = 'Faça o login para ter acesso ao sistema'
      }
      if (form === 'signup') {
        title.value = 'Cadastro'
        subtitle.value = 'Cadastre-se para ter acesso ao sistema'
      }
      /* if (form === 'reset') {
        title.value = 'Redefinir Senha'
        subtitle.value = 'Entre com seu email para redefinir a senha'
      } */
    }
    return { showForm, title, subtitle, gotoHome, handleForm }
  }
}
</script>

<style></style>
