<template>
  <div class="container w-70 my-2">
    <Navbar />
    <chat-window></chat-window>
    <new-chat-form></new-chat-form>
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'

export default {
  components: {Navbar, NewChatForm, ChatWindow},
  setup() {
    const {user} = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
.w-70 {
  width: 70% !important;
}
.my-2 {
  margin: 20px auto !important;
}
</style>