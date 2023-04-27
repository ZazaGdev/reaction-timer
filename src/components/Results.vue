<template>
    <div class="text-center mt-5">
        <p class="text-2xl">
            Reaction Time <span class="text-3xl">{{ score }}</span> ms
        </p>
        <p class="text-xl mt-2">Rank - {{ rank }}</p>
    </div>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null,
        }
    },
    mounted() {
        if (this.score < 300) {
            this.rank = 'Extraordinary 🏆'
        } else if (this.score < 450) {
            this.rank = 'Rapid 🥈'
        } else if (this.score < 700) {
            this.rank = 'Fast 🥉'
        } else if (this.score < 1000) {
            this.rank = 'Slow 🐢'
        } else {
            this.rank = 'Snail 🐌 '
        }
    },
}
</script>

<style></style>
