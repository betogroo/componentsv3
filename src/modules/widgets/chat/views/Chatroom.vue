<template>
  <h1>Chat</h1>
  <h3>Bem vindo {{ loggedUser ? loggedUser.displayName : null }}</h3>
  <v-divider></v-divider>
  <chat-window />
  <new-chat-form :loggedUser="loggedUser" />
</template>

<script>
import { computed } from 'vue'
import NewChatForm from '@/modules/widgets/chat/components/NewChatForm.vue'
import ChatWindow from '@/modules/widgets/chat/components/ChatWindow.vue'
import store from '@/store'
export default {
  name: 'Chatroom',

  components: {
    NewChatForm,
    ChatWindow
  },

  setup() {
    const loggedUser = computed(() => {
      return store.state.auth.loggedUser
    })

    return { loggedUser }
  }
}
</script>

<style></style>
