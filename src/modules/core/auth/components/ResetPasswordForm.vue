<template>
  <form @submit.prevent="handleSubmit">
    <v-row>
      <v-col cols="12">
        <app-textfield v-model="email" type="email" placeholder="Email" />
      </v-col>
      <v-col cols="12">
        <app-btn block prepend0icon="mdi-lock-question">Redefinir</app-btn>
      </v-col>
    </v-row>
  </form>
  <error-form>{{ error }}</error-form>
</template>

<script>
import { ref } from 'vue'
import { useResetPassword } from '../composables'
import ErrorForm from './ErrorForm'
export default {
  name: 'ResetPasswordForm',

  components: {
    ErrorForm
  },

  emits: ['reset'],

  setup() {
    const { error, reset } = useResetPassword()
    const email = ref('')

    const handleSubmit = async () => {
      await reset(email.value)
    }

    return {
      error,
      email,
      handleSubmit
    }
  }
}
</script>

<style></style>
