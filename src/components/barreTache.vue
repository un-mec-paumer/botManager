<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ isConnected:boolean }>()
</script>

<template>
    <div class="container" v-if="!isConnected">
        <div class="left">
            <img src="../img/yuji.jpg" alt="logo">
            <a href="">contact mec</a>
        </div>
        
        <div class="right">
            <a href="https://fr-scan.com">scan site</a>
            <a href="https://fr-scan.com">add a discord account</a>
            <a href="https://fr-scan.com">sign up</a>
        </div>
    </div>

</template>

<style scoped>
    
    template{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100px;

    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #000080;
        width: 100%;
        height: 125px;

    }

    div{
        background-color: #000080;
        align-items: center;
    }

    img {
        width: 65px;
        aspect-ratio: 1/1;
    }
    

    a {
        text-decoration: none;
        color: white;
        font-size: 25px;
        margin-left: 25px;
        margin-right: 25px;
    }

    a:hover {
        color: #646cff;
    }

    .left {
        display: flex;
        margin-left: 30px;
    }
</style>
