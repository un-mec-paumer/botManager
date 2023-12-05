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

  const maxSection = ref([[]] as Array<Array<Manga>>) // [[manga, manga, manga], [manga, manga, manga]]
  // console.log(data);
  let compteur = 0;
  let first = true;
  const connected = isConnected();

  fetch(api + '/mangas').then((res) => res.json()).then((res) => {
    res.forEach((manga: Manga) => {
      // console.log(manga);
      if (compteur === 2) {
        compteur = 0;
        maxSection.value.push([manga]);
      }
      else {
        if(first){
          maxSection.value[0].push(manga);
          first = false;
          return;
        }
        maxSection.value[maxSection.value.length - 1].push(manga);
        compteur++;
      }
    })
  })
  //console.log("hello world");

  console.log(maxSection.value);
</script>

<template>
  <barreTache :is-connected="connected" />
  <div class="containerMax" v-for="sectionManga in maxSection">
    <sectionManga v-for="manga in sectionManga" :manga="manga" :isConnected="connected" :-token="token"/>
  </div>
  <!-- <div class="containerMax">
    <sectionManga v-for="manga in maxSection[0]" :manga="manga" :isconnneced="connected"/>
  </div> -->
</template>

<style scoped>
.containerMax {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
}

</style>
