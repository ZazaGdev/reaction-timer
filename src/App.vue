<template>
    <div class="flex justify-center items-center flex-col">
        <h1 class="text-center text-5xl mt-12 text-indigo-800">Reaction Timer</h1>
        <button
            @click="start"
            :disabled="isPlaying"
            class="bg-indigo-500 text-white mt-4 rounded-xl py-2 px-7 text-lg"
            :class="{ 'opacity-20': isPlaying === true }"
        >
            Play
        </button>
    </div>
    <div class="blockWrapper border-double border-4 border-indigo-600 m-12 h-3/4">
        <Block v-if="isPlaying" :delay="delay" />
    </div>
</template>

<script>
import Block from './components/Block.vue'

export default {
    name: 'App',
    components: { Block },
    data() {
        return {
            isPlaying: false,
            delay: null,
        }
    },
    methods: {
        start() {
            this.delay = 2000 + Math.random() * 5000
            this.isPlaying = true
            console.log(this.delay)
        },
    },
}
</script>

<style></style>
