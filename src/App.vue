<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
import sectionManga from './components/sectionManga.vue';
import barreTache from './components/barreTache.vue';
const connected = false;
</script>

<template>
  <barreTache :is-connected="connected" />

  <div class="container">
    <sectionManga />
  </div>
</template>

<style scoped>
   .container{
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    /* margin-top: 100px; */
  }
</style>
