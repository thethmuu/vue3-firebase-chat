<template>
  <nav v-if="user">
    <div>
      <p>Hey, {{ user.displayName }}</p>
      <p>Logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Log out</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const {error, logout} = useLogout()
    const {user} = getUser()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      if(!error.value) {
        router.push({name: 'Welcome'})
      }
    }

    return {handleClick, error, user}
  }
}
</script>

<style>

</style>