<template>
  <h3>Número Aleatório: {{ randomNumber }}</h3>
  <div v-if="loggedUser">
    <h3>{{ loggedUser.displayName }} você já pode entrar no chat</h3>
    <v-btn @click="enterChat">Entrar no Chat</v-btn>
  </div>
  <div v-else>
    <div v-if="showLogin">
      <login-form @login="enterHome"></login-form>
      <a @click="showLogin = false"
        >Não tem conta? <strong>Cadastre-se</strong></a
      >
    </div>
    <div v-else>
      <signup-form @signup="enterHome"></signup-form>
      <a @click="showLogin = true">Já tem conta? <strong>Faça Login</strong></a>
    </div>
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
    const enterHome = () => {
      router.push({ name: 'Welcome' })
    }
    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }
    return { showLogin, enterHome, enterChat }
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
