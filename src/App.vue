<script setup lang="ts">
import { Manga } from './manga';
import sectionManga from './components/sectionManga.vue';
import barreTache from './components/barreTache.vue';
import { api } from './Api';
// const connected = false;

function isConnected(){
  const token = document.cookie.split(';').find((cookie) => cookie.includes('token'));
  //console.log(token);
  if(token){
    return true;
  }
  return false;
}

const connected = isConnected();
// console.log(connected);

</script>

<script lang="ts">
  const data = fetch(api + '/mangas').then((res) => res.json());

  let maxSection:any = [[]]; // [[manga, manga, manga], [manga, manga, manga ]]
  // console.log(data);
  let compteur = 0;
  let first = true;
  
  data.then((res) => {
    res.forEach((manga: Manga) => {
      if (compteur === 2) {
        compteur = 0;
        maxSection.push([manga]);
      }
      else {
        if(first){
          maxSection[0].push(manga);
          first = false;
          return;
        }
        maxSection[maxSection.length - 1].push(manga);
        compteur++;
      }
    })
  })
  
  console.log(maxSection);
  // maxSection.forEach((section:any) => {
  //   if(section.length === 4){
  //     const keep = section.pop();
  //     maxSection.push([keep]);
  //   }
  // })

  // console.log(maxSection);
  
 
</script>

<template>
  <barreTache :is-connected="connected" />
  <div class="containerMax" v-for="sectionManga in maxSection">
    <sectionManga v-for="manga in sectionManga" :manga="manga" :isconnneced="connected"/>
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
