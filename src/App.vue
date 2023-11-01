<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
import sectionManga from './components/sectionManga.vue';
import barreTache from './components/barreTache.vue';
const connected = false;
</script>

<template>
  <barreTache :is-connected="connected" />

  <div class="containerMax">
    <sectionManga />
    <sectionManga />
    <sectionManga />
  </div>
  <div class="containerMax">
    <sectionManga />
    <sectionManga />
    <sectionManga />
  </div>
</template>

<style scoped>
.containerMax {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
}

</style>
