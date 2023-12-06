<script setup lang="ts">
    import barreTache from './components/barreTache.vue';
    import { api } from './Api';
    import { ref } from 'vue';
    const isConnected = document.cookie.split(';').find((cookie) => cookie.includes('token')) ? true : false;

</script>

<template>
    <barreTache :is-connected="isConnected" />

    
    <form class="containerMax" action="">
        <label for="name_manga">name manga:</label>
        <input type="text" id="name_manga" placeholder="name">
        <label for="chapter">last chapter:</label>
        <input type="number" id="chapter" placeholder="chapter">
        <label for="idPage">the manga have page:</label>
        <select id="idPage">
            <option value="false">no</option>
            <option value="true">yes</option>
        </select>
        <button type="submit" id="button">add manga</button>
    </form>
    
</template>

<style scoped>
    .containerMax{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>