<template>
  <app-card flat :class="$vuetify.display.mdAndDown ? 'mobile' : 'desktop'">
    <app-card
      flat
      :class="
        $vuetify.display.mdAndDown
          ? 'mobile-banner-card'
          : 'desktop-banner-card'
      "
      color="primary"
    >
    </app-card>

    <app-card
      flat
      color="transparent"
      :class="$vuetify.display.mdAndDown ? 'mobile-card' : 'desktop-card'"
    >
      <div
        class="d-flex flex-column text-center pb-6"
        :class="$vuetify.display.mdAndDown ? 'white--text' : 'default--text'"
      >
        <span class="text-h4 pb-2">{{ title }}</span>
        <span class="text-subtitle">{{ subtitle }}</span>
      </div>
      <app-card
        elevation="24"
        color="#FFF"
        :width="$vuetify.display.xs ? '90vw' : '400px'"
        :class="
          $vuetify.display.mdAndDown
            ? 'mobile-login-card'
            : 'desktop-login-card'
        "
      >
        <div v-if="showForm === 'login'">
          <login-form @login="gotoHome"></login-form>
          <v-row no-gutters>
            <v-col cols="12" class="text-center pt-4">
              <a
                class="text-decoration-none default--text"
                @click.prevent="handleForm('signup')"
              >
                Ainda não tem conta?
                <strong> Cadastre-se</strong>
              </a>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="text-center pt-4">
              <a
                class="text-decoration-none default--text"
                @click.prevent="handleForm('reset')"
              >
                Esqueceu a senha?
                <strong> Redefina</strong>
              </a>
            </v-col>
          </v-row>
        </div>
        <div v-if="showForm === 'signup'">
          <signup-form @signup="gotoHome"></signup-form>
          <v-row no-gutters>
            <v-col cols="12" class="text-center pt-4">
              <a
                class="text-decoration-none default--text"
                @click.prevent="handleForm('login')"
              >
                Já é cadastrado? Faça o <strong> login </strong>
              </a>
            </v-col>
          </v-row>
        </div>
        <div v-if="showForm === 'reset'">
          <reset-password-form @reset="gotoHome"></reset-password-form>
          <v-row no-gutters>
            <v-col cols="12" class="text-center pt-4">
              <a
                class="text-decoration-none default--text"
                @click.prevent="handleForm('login')"
              >
                Já é cadastrado? Faça o <strong> login </strong>
              </a>
            </v-col>
          </v-row>
        </div>
      </app-card>
    </app-card>
  </app-card>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { SignupForm, LoginForm, ResetPasswordForm } from '../components'
export default {
  name: 'Welcome',

  components: {
    SignupForm,
    LoginForm,
    ResetPasswordForm
  },

  setup() {
    const router = useRouter()
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
      if (form === 'reset') {
        title.value = 'Redefinir Senha'
        subtitle.value = 'Entre com seu email para redefinir a senha'
      }
    }

    return {
      showForm,
      title,
      subtitle,
      gotoHome,
      handleForm
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-card {
  margin-top: -150px;
}
.desktop-card {
  margin-top: auto;
  margin-bottom: auto;
}
.mobile {
  background-color: rgba(0, 0, 0, 0.01);
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.desktop {
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
}
.mobile-banner-card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 238px;
  border-bottom-left-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
}
.mobile-login-card {
  margin-bottom: 20;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  /* box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12) !important; */
}
.desktop-banner-card {
  width: 100vw;
  margin-right: auto;
}
.desktop-login-card {
  display: flex;
  width: 66vw;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}
</style>
