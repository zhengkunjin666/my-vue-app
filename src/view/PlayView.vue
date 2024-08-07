<template>
    <div class="iframe-box">
        <iframe
            id="iframe"
            class="z-width-fill z-height-fill"
            :src="data.src"
            frameborder="0"
            allowfullscreen="true"
        ></iframe>
    </div>
</template>

<script lang="ts" setup>
const data = reactive({
    src: '',
})
onActivated(() => {
    setData()
})
const setData = () => {
    const params = JSON.parse(window.history.state.params)
    console.log(params)
    if (params.playUrl) {
        data.src = 'https://jx.xmflv.com/?url=' + params.playUrl
        document.title = params.title
    } else if (params.albumInfo.pageUrl) {
        data.src = 'https://jx.xmflv.com/?url=' + params.albumInfo.pageUrl
        document.title = params.albumInfo.title
    } else if (params.albumInfo.qipuId) {
        document.title = params.albumInfo.title
        const url = `https://pcw-api.iqiyi.com/video/video/videoinfowithuser/${params.albumInfo.qipuId}`
        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                console.log('Success:', res)
                if (res.data.playUrl) {
                    data.src = 'https://jx.xmflv.com/?url=' + res.data.playUrl
                } else if (res.data.firstVideoUrl) {
                    data.src =
                        'https://jx.xmflv.com/?url=' + res.data.firstVideoUrl
                }
            })
            .catch((error) => {
                console.error('Error:', error)
                ElMessage.error({
                    message: error,
                    offset: 100,
                })
            })
    } else {
        data.src = ''
    }
}
</script>

<style scoped lang="scss">
.iframe-box {
    width: 100vw;
    height: 100vh;
    padding: 10px;
    box-sizing: border-box;
}
</style>
