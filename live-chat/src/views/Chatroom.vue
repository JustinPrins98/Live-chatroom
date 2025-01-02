<template>
  <div class="container">
    <Navbar/>
    <ChatWindow/>
    <NewChatForm/>
  </div>
</template>

<script>
//Imports
import ChatWindow from '@/components/ChatWindow.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Navbar, 
    NewChatForm,
    ChatWindow,
  },
  
  setup(){
    // refs
    const {user} = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value) {
        router.push({name: 'Welcome'})
      }
    })

    // return
    }
  }


</script>

<style>


</style>