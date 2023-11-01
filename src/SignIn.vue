<script setup lang="ts">
    import barreTache from './components/barreTache.vue';
    import formSignIn from './components/formSignIn.vue';
    import formSignUp from './components/formSignUp.vue';
    import { ref } from 'vue';
</script>

<script lang="ts">
    const connected = ref(false);
    let signUp = ref(true);
    export { signUp };
    function changeSignUp() {
        return signUp.value ? 'pass to sign in' : 'pass to sign up';
    }


    // console.log(document.getElementById('switch'));
</script>


<template>
    <barreTache :is-connected="connected"/>
    <formSignIn v-if="signUp"/>
    <formSignUp v-else/>
    
    <div class="container2">
        <span id="text">{{ changeSignUp() }}</span>

        <input type="checkbox" id="switch" v-on:click="signUp = !signUp;"/>
        <label for="switch">Toggle</label>
    </div>
    
</template>

<style scoped>

    input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 50px;
	height: 25px;
	background: grey;
	display: block;
	border-radius: 100px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	top: 1.25px;
	left: 1.25px;
	width: 22.5px;
	height: 22.5px;
	background: #fff;
	border-radius: 90px;
	transition: 0.1s;
}

input:checked + label {
	background: #bada55;
}

input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

label:active:after {
	width: 60px;
}
    

.container2{
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    /* height: 50vh; */
    text-align: center;

    margin-top: 15px;
}

</style>