<script setup lang="ts">

</script>

<template>
    <div class="container">
        <h1>Sign Up</h1>
        <label for="username">your user name on discord</label>
        <input id="username" type="text" placeholder="Username"/>

        <button id="submit">Sign Up</button>
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



</style>
