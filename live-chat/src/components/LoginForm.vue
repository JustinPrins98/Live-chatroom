<template>
    <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <div class="error">{{ error }}</div>
       <button>Login</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import useLogin from '@/composables/useLogin';
  
  export default {
      setup(props, context){
          // refs
          const email = ref('')
          const password = ref('')

          const {error, login} = useLogin()
  
          // function
          const handleSubmit = async () => {
            await login(email.value, password.value)
            if(!error.value) {
                console.log('User logged in')
                context.emit('login')     
            }
          }
  
          //return values
          return { error, email, password, handleSubmit}
      }
  
  }
  </script>
  
  <style>
  
  </style>