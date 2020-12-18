<template>
  <div class="welcome container w-30">
      <p>Welcome</p>
      <div v-if="showLogin">
        <h2>Login</h2>
        <LoginForm @login="enterChat"/>
        <p>No Account Yet? <span @click="showLogin = false">Sign Up</span></p>
      </div>
      <div v-else>
        <h2>Sign Up</h2>
        <SignUpForm @signup="enterChat" />
        <p>Already Signed Up? <span @click="showLogin = true">Log In</span></p>
      </div>
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: {SignUpForm, LoginForm},
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'ChatRoom' })
    }

    return { showLogin, enterChat } 
  }
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto 10px;
}
</style>