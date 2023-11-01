<script setup lang="ts">


//defineProps<{ manga:any }>()
</script>

<template>
    <div class="container">
        <img src="../img/Placeholder.png" alt="manga">
        <h2>titre</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi assumenda, quasi minus dignissimos nobis odit vitae repudiandae laboriosam, architecto rem accusamus iusto, beatae maiores? Iure officia rem eum vitae commodi.</p>
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
        width: 276px;
        height: 186px;
    }

    p{
        text-align: justify;
        padding-left: 25px;
        padding-right: 25px;
    }

</style>