<template>
    <div class="iframe-box">
        <iframe
            class="z-width-fill z-height-fill"
            :src="data.src"
            frameborder="0"
        ></iframe>
    </div>
</template>

<script lang="ts" setup>
const data = reactive({
    src: '',
})
onMounted(() => {
    const params = JSON.parse(window.history.state.params)
    data.src = 'https://jx.xmflv.com/?url=' + params.playUrl
    // https://jx.xmflv.com/?url=
})
</script>

<style scoped lang="scss">
.iframe-box {
    width: 100vw;
    height: 100vh;
    padding: 10px;
    box-sizing: border-box;
}
</style>
