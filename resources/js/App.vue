<template>
</template>

<script setup>
import Pusher from "pusher-js";

const pusher = new Pusher('key', {
    wsHost: 'localhost',
    wssPort: 6001,
    wsPort: 6001,
    cluster: 'mt1',
    disableStats: true,
    forceTLS: false,
    enabledTransports: ['ws']
})

pusher.subscribe('currency-info')
</script>

<style scoped>

</style>
