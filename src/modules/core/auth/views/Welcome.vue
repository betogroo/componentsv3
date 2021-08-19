<template>
  <h3>Número Aleatório: {{ randomNumber }}</h3>
  <div v-if="showLogin">
    <login-form @login="enterChat"></login-form>
    <a @click="showLogin = false"
      >Não tem conta? <strong>Cadastre-se</strong></a
    >
  </div>
  <div v-else>
    <signup-form @signup="enterChat"></signup-form>
    <a @click="showLogin = true">Já tem conta? <strong>Faça Login</strong></a>
  </div>
</template>

<script>
import utils from '@/utils/utils.js'
import { ref } from 'vue'
import router from '@/router'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
export default {
  name: 'Welcome',

  components: {
    SignupForm,
    LoginForm
  },

  setup() {
    const showLogin = ref(false)
    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }
    return { showLogin, enterChat }
  },

  computed: {
    loggedUser() {
      return this.$store.state.auth.loggedUser
    },
    randomNumber() {
      return utils.randomInt(0, 10)
    }
  }
}
</script>

<style></style>
