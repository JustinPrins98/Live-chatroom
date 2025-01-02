<template>
  <form>
    <textarea
    placeholder="Type a message and hit enter to send..."
    v-model="message"
    @keypress.enter.prevent="handleSubmit">

    </textarea>
    <div class="error">
        {{ error }}
    </div>
  </form>
</template>

<script>
import getUser from '@/composables/getUser';
import { ref } from 'vue';
import { timestamp } from '@/firebase/config';
import useCollection from '@/composables/useCollection';

export default {
    setup(){
        //composables
        const {user} = getUser()
        const {addDoc, error} = useCollection('messages')

        //Refs
        const message = ref('')

        //functions
        const handleSubmit = async () => {
            const chat = {
                message: message.value,
                name: user.value.displayName,
                createdAt: timestamp()
            }

            await addDoc(chat)
            if(!error.value){
                message.value = ''
            }
        }



        //return
        return { message, handleSubmit, error }
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
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
  .error {
    text-align: center;
    color: #ff2a58;
    font-size: 12px;
    padding: 10px 0;
  }
</style>