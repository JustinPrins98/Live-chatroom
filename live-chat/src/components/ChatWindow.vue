<template>
  <div class="chat-window">
    <div class="error" v-if="error">{{ error }}</div>

    <div v-if="documents" class="messages" ref="messages">
        <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
            <span class="created-at">{{ doc.createdAt }}</span>
            <span class="name">{{ doc.name }}:</span>
            <span class="message">{{ doc.message }}</span>
        </div>
    </div>

  </div>
</template>

<script>
//imports
import getCollection from '@/composables/getCollection';
import { formatDistanceToNow } from 'date-fns';
import { computed, onMounted, onUpdated, ref } from 'vue';

export default {
    setup(){
        // Composables
        const {error, documents} = getCollection('messages')

        //Computed property
        const formattedDocuments = computed(()=>{
            if(documents.value){
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return { ...doc, createdAt: time}
                })
            }
        })

        // refs
        const messages = ref('messages')

        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
        })

        
        // functions


        //return
        return {error, documents, formattedDocuments, messages}
    }

}
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
    scroll-behavior: smooth;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>