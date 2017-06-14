<template>
    <div class="container">
        <div class="title">{{message.title}}</div>
        <span class="sender">{{message.sender}}</span> -
        <span class="message">{{message.message}}</span>
    </div>
</template>
<script>
export default {
    name: 'message',
    props: ['message']
}
</script>
<style scoped>
.container {
    margin-bottom: 20px;
}

.title {
    margin-bottom: 4px;
}

.sender {
    font-size: 14px;
}

.message {
    color: gray;
    font-size: 14px;
}
</style>
