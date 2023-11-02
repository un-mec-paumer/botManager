<script setup lang="ts">
    import { Manga } from '../manga';
    //import { defineProps } from 'vue';
    //import { ref, defineProps, onMounted } from 'vue';

    const props = defineProps<{ manga:Manga }>();

</script>

<script lang="ts">
    
</script>

<template>
    <div class="container">
        <img id="img" v-bind:src="manga.img" alt="manga">
        <h2>{{ props.manga.name_manga }}</h2>
        <p> {{ props.manga.synopsis }}</p>
        <a href="http://">read more</a>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        width: 360px;
        height: 500px;
        background-color: #d9d9d9;
        border-radius: 10px;
        margin-top: 50px;
        align-items: center;
    }

    img{
        margin-top: 25px;
        width: auto;
        height: 186px;
    }

    h2{
        font-size: 25px;
        text-align: center;
        max-height: 30.4px;
    }

    p{
        text-align: justify;
        padding-left: 25px;
        padding-right: 25px;

        max-height: 134.4px;

        overflow:auto;
    }

</style>