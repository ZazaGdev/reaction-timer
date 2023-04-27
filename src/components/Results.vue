<template>
    <div class="text-center mt-5">
        <p class="text-xl">
            Reaction Time <span class="text-3xl">{{ score }}</span> ms
        </p>
        <p class="text-lg">Rank - {{ rank }}</p>
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
        if (this.score < 250) {
            this.rank = 'Extraordinary'
        } else if (this.score < 400) {
            this.rank = 'Rapid'
        } else {
            this.rank = 'Slow'
        }
    },
}
</script>

<style></style>
