<template>
    <div
        @click="stopTimer"
        v-if="showBlock"
        ref="blockElement"
        class="absolute w-1/6 h-1/6 bg-cyan-500 flex items-center justify-center text-4xl text-white"
        :style="{ left: blockLeft + 'px', top: blockTop + 'px' }"
    >
        <p>Here</p>
    </div>
</template>

<script>
export default {
    props: ['delay', 'wrapperWidth', 'wrapperHeight'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
            blockWidth: null,
            blockHeight: null,
            blockLeft: null,
            blockTop: null,
        }
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()

            this.$nextTick(() => {
                const targetElement = this.$refs.blockElement
                const targetRect = targetElement.getBoundingClientRect()
                this.blockWidth = targetRect.width
                this.blockHeight = targetRect.height
                console.log(this.wrapperHeight)
                console.log(this.blockWidth, this.blockHeight)
                this.calculatePosition()
            })
        }, this.delay)
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer)
            this.$emit('end', this.reactionTime)
        },
        calculatePosition() {
            this.blockTop = Math.floor(Math.random() * (this.wrapperHeight - this.blockHeight)) + 1
            this.blockLeft = Math.floor(Math.random() * (this.wrapperWidth - this.blockWidth)) + 1
        },
    },
}
</script>

<style></style>
