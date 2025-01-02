<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';

export default {
  setup(props, context) {
    // Destructure signup and error from useSignup composable
    const { error, signup } = useSignup();

    // refs for form fields
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    // Submit handler
    const handleSubmit = async () => {
      try {
        await signup(email.value, password.value, displayName.value);
        if(!error.value) {
                context.emit('signup')     
            }
      } catch (err) {
        console.error('Signup failed:', err);
      }
    };

    // Return refs and methods for use in the template
    return {
      displayName,
      email,
      password,
      handleSubmit,
      error, // Expose error if needed for form validation or display
    };
  }
};
</script>

<style>
/* Add styles if needed */
</style>
