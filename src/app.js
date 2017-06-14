import Vue from 'vue'
import App from './App.vue'

import Chat from './components/Chat.vue'
import Message from './components/Message.vue'

export function createApp () {
  Vue.component('chat', Chat);
  Vue.component('message', Message);

  const app = new Vue({
    render: h => h(App)
  })

  return { app }
}
