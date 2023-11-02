<script setup lang="ts">
    import { api } from '../Api';
    import { ref } from 'vue';
</script>

<script lang="ts">
    
    let connexion = ref(true)

    function signIn(){
        const username = document.getElementById('username') as HTMLInputElement;
        //const submit = document.getElementById('submit') as HTMLButtonElement;
        document.cookie = "";
        console.log(username.value);
        
        fetch(api + '/connexion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username.value
            })
        })
        //.then((res) => res.json())
        .then((data) => {

            data.json().then((res) => {

                if(res.token === "non"){
                    console.log('error');
                    connexion.value = false;
                    return;
                }
                else{
                    console.log('ok');
                    document.cookie = 'token =' + res.token;
                    window.location.href = "http://localhost:5173/index.html";
                }

                
            });

            //document.cookie = 'username=' + data.json().then((res) => res.json()) + '; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/';

            //console.log(document.cookie);
            
        })
        
    }

</script>


<template>
    <div class="container">
        <h1>Sign In</h1>
        <label for="username">your user name on discord</label>
        <input id="username" type="text" placeholder="Username"/>
        <span v-if="!connexion">connected denied</span>
        <button id="submit" @click="signIn">Sign In</button>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    text-align: center;

    border: 2px solid #000;
    border-radius: 25px;

    margin-top: 7%;
    margin-left: 40%;
    margin-right: 40%;
}

input {
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    /* width: 100%; */

    font-family: Bruno Ace;
}

button {
    /* margin: 0.5rem; */
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    /* width: 100%; */
    margin-top: 30px;
    font-family: Bruno Ace;
}

button:hover {
    background-color: #ccc;
}

span{
    color: red;
}

</style>
