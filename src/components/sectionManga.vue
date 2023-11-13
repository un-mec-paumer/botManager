<script setup lang="ts">
    import { Manga } from '../manga';
    import { api } from '../Api';
    import { ref } from 'vue';

    const { manga, isconnneced } = defineProps<{ manga: Manga, isconnneced: boolean }>();
    const sub = ref({sub:false});
    const lien = ref("https://fr-scan.com/manga/" + manga.name_manga + "/");
    //export { sub };

    const img = ref("")

    fetch(api + "/mangaImg", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: manga.name_manga
        })
    }).then((res) => res.json()).then((res) => {
        // console.log(res);
        img.value = res.signedUrl;
    });

    // console.log();


    console.log(manga.img);
    
    if (isconnneced) {
        //const token = document.cookie.split(';').find((cookie) => cookie.includes('token'))?.split('=')[1];
        fetchSubData();
    }
    else{
        
    }

    // Effectuer une opération asynchrone pour obtenir la valeur de "sub"

    async function fetchSubData() {
        const response = await fetch(api + "/getSub", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_manga: manga.id_manga,
                token: document.cookie.split(';').find((cookie) => cookie.includes('token'))?.split('=')[1]
            })
        });

        //console.log(response.json().then((res) => console.log(res)));
        sub.value = await response.json().then((res) => {return res});
    }

    async function addSub() {
        console.log("add sub");
        const res = await fetch(api + "/addSub", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_manga: manga.id_manga,
                token: document.cookie.split(';').find((cookie) => cookie.includes('token'))?.split('=')[1]
            })
        }).then((res) => res.json()).then((res) => {return res});

        console.log(res);
        sub.value.sub = res;
    }

    async function removeSub() {
        console.log("remove sub");
        const res = await fetch(api + "/deleteSub", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_manga: manga.id_manga,
                token: document.cookie.split(';').find((cookie) => cookie.includes('token'))?.split('=')[1]
            })
        }).then((res) => res.json()).then((res) => {return res});

        console.log(res);
        sub.value.sub = !res;
    }

    //return { sub, manga, isconnneced };
    //console.log(document.cookie.split(';').find((cookie) => cookie.includes('token'))?.split('=')[1]);
    //console.log(sub.value.sub);
</script>



<template>
    <div class="container">
        <img id="img" v-bind:src="img" alt="manga">
        <h2>{{ manga.name_manga.replaceAll("-"," ") }}</h2>
        <label for="chap">chapitre:</label>
        <h3 id="chap">{{ manga.chapitre_manga }}</h3>
        <p> {{ manga.synopsis }}</p>
        <a :href="lien">read more</a>

        <button v-if="isconnneced && !sub.sub" @click="addSub">add subscride</button>
        <button v-else-if="isconnneced && sub.sub" @click="removeSub">remove subscride</button>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        width: 360px;
        height: 575px;
        background-color: #d9d9d9;
        border-radius: 10px;
        margin-top: 50px;
        align-items: center;
    }

    button {
        /* margin: 0.5rem; */
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        /* width: 100%; */
        margin-top: 15px;
        margin-bottom: 15px;
        font-family: Bruno Ace;
    }

    button:hover {
        background-color: #ccc;
    }

    img{
        margin-top: 25px;
        width: auto;
        height: 186px;
    }

    h2{
        font-size: 25px;
        text-align: center;
        max-height: 40px;
    }

    h3{
        font-size: 20px;
        text-align: center;
        max-height: 20.4px;
        margin: 0%;
    }

    p{
        text-align: justify;
        padding-left: 25px;
        padding-right: 25px;

        max-height: 134.4px;

        overflow:auto;
    }

</style>