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
  <overlay-loading :active="isPending"></overlay-loading>
</template>

<script>
import { ref } from 'vue'
import { useResetPassword, useAuthErrors } from '../composables'
import ErrorForm from './ErrorForm'
import { OverlayLoading } from '@/components/layout/loading'
export default {
  name: 'ResetPasswordForm',

  components: {
    ErrorForm,
    OverlayLoading
  },

  emits: ['reset'],

  setup(props, { emit }) {
    const { error: resetError, isPending, reset } = useResetPassword()
    const { searchError } = useAuthErrors()
    const email = ref('')
    const error = ref('')

    const handleSubmit = async () => {
      await reset(email.value)
      if (!resetError.value) {
        emit('reset')
      } else {
        error.value = searchError(resetError.value)
      }
    }

    return {
      error,
      resetError,
      isPending,
      email,
      handleSubmit
    }
  }
}
</script>

<style></style>
