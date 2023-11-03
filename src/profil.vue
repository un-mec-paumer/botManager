<script setup lang="ts">
    import barreTache from './components/barreTache.vue';

    function isConnected(){
        const token = document.cookie.split(';').find((cookie) => cookie.includes('token'));
        if(token){
            return true;
        }
        return false;
    }

    const connected = isConnected();
</script>

<template>
    <barreTache :is-connected="connected"/>


    <!-- <img src="" alt="pp"> -->
</template>

<style scoped>

</style>