<template>
    <div class="chat">
        <div class="chat-header" :class="theme">
            <h1>Chat</h1>
        </div>
        <div class="chat-content">
            <div v-if="messages.length === 0">
                No messages yet
            </div>
            <message v-for="message in messages" :key="message.title" :message="message"></message>
        </div>
    </div>
</template>
<script>
const messagesQueu = 10;

export default {
    name: 'chat',
    data() {
        return {
            messages: [],
            theme: 'ordina'
        }
    },
    mounted() {
        window.addEventListener('selectTheme', (event) => {
            this.theme = (event.detail && event.detail.theme.toLowerCase() || 'ordina');
        }, false);
        window.addEventListener('message', (event) => {
            this.messages.push(event.detail.message);
            console.log(this.messages);
            if (this.messages.length >= messagesQueu) {
                this.messages.shift();
            }
        }, false);
    }
}
</script>
<style scoped>
.chat {
    position: fixed;
    top: 100px;
    right: 16px;
    width: 280px;
    z-index: 1;
    border-radius: 2px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.chat-header {
    color: white;
}

.chat-header.jworks {
    background-color: #4e4e4e;
}

.chat-header.ordina {
    background-color: #e98300;
}

.chat-header>h1 {
    margin: 0;
    padding: 16px;
}

.chat-content {
    padding: 16px;
    overflow: auto;
    max-height: 400px;
}
</style>
