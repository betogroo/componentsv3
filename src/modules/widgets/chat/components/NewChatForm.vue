<template>
  <form>
    <textarea
      v-model="message"
      placeholder="Digite a mensagem e tecle Enter"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { fbTimestamp } from '@/plugins/firebase'
import useCollection from '@/composables/useCollection.js'
export default {
  name: 'NewChatForm',

  props: {
    loggedUser: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { addDoc, error } = useCollection('message')
    const message = ref('')

    const handleSubmit = async () => {
      const chat = {
        name: props.loggedUser.displayName,
        message: message.value,
        createdAt: fbTimestamp()
      }

      await addDoc(chat)
      if (!error.value) {
        message.value = ''
      }
    }

    return { message, handleSubmit, error, addDoc }
  }
}
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
