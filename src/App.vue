<script setup lang="ts">
  import { Manga } from './manga';
  import sectionManga from './components/sectionManga.vue';
  import barreTache from './components/barreTache.vue';
  import { api } from './Api';
  import { ref } from 'vue';
  // const connected = false;
  let token = "";
  function isConnected(){
    token = document.cookie.split(';').find((cookie) => cookie.includes('token')) || "";
    //console.log(token);
    if(token){
      return true;
    }
    return false;
  }

  const maxSection = ref([] as Array<Manga>) // [[manga, manga, manga], [manga, manga, manga]]
  // console.log(data);
  let compteur = 0;
  let first = true;
  const connected = isConnected();

  fetch(api + '/mangas').then((res) => res.json()).then((res) => {
    res.forEach((manga: Manga) => {
      maxSection.value.push(manga);
    })

    //maxSection.value.reverse();
  })
  //console.log("hello world");

  console.log(maxSection.value);
</script>

<template>
  <barreTache :is-connected="connected" />
  <div class="containerMax" >
    <sectionManga v-for="manga in maxSection" :manga="manga" :isConnected="connected" :Token="token"/>
  </div>
</template>

<style scoped>
.containerMax {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
}

</style>
