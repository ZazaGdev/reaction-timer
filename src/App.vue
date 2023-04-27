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
    <Results v-if="showResults" :score="score" />

    <div class="blockWrapper border-double border-4 border-indigo-600 m-12 h-3/4">
        <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    </div>
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
    name: 'App',
    components: { Block, Results },
    data() {
        return {
            isPlaying: false,
            delay: null,
            score: null,
            showResults: false,
        }
    },
    methods: {
        start() {
            this.delay = 2000 + Math.random() * 5000
            this.isPlaying = true
            console.log(this.delay)
            this.showResults = false
        },
        endGame(reactionTime) {
            this.score = reactionTime
            this.isPlaying = false
            this.showResults = true
        },
    },
}
</script>

<style></style>
