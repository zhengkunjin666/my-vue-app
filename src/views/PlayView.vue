<template>
    <div class="iframe-box" v-if="data.src">
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
onMounted(() => {
    const type = window.history.state.type
    document.getElementsByTagName('link')[0].remove()
    const linkzh = document.createElement('link')
    linkzh.setAttribute('type', 'image/svg+xml')
    linkzh.setAttribute('rel', 'icon')
    linkzh.setAttribute('href', '/' + type + '.svg')
    document.head.appendChild(linkzh)
})
onActivated(() => {
    setData()
})
onDeactivated(() => {
    data.src = ''
})
const setData = () => {
    const params = JSON.parse(window.history.state.params)
    const type = window.history.state.type
    if (type === 'iqiyi') {
        if (params.playUrl) {
            data.src = 'https://jx.xmflv.com/?url=' + params.playUrl
            document.title = params.title
        } else if (params.albumInfo.pageUrl) {
            data.src = 'https://jx.xmflv.com/?url=' + params.albumInfo.pageUrl
            document.title = params.albumInfo.title
        } else if (params.albumInfo.qipuId) {
            document.title = params.albumInfo.title
            if (params.albumInfo.itemLink) {
                data.src =
                    'https://jx.xmflv.com/?url=' + params.albumInfo.itemLink
                return
            }
            const url = `https://pcw-api.iqiyi.com/video/video/videoinfowithuser/${params.albumInfo.qipuId}`
            fetch(url)
                .then((response) => response.json())
                .then((res) => {
                    console.log('Success:', res)
                    if (res.data.playUrl) {
                        data.src =
                            'https://jx.xmflv.com/?url=' + res.data.playUrl
                    } else if (res.data.firstVideoUrl) {
                        data.src =
                            'https://jx.xmflv.com/?url=' +
                            res.data.firstVideoUrl
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
    } else {
        console.log(params, params.playUrl)
        if (params.playUrl) {
            data.src = 'https://a.wkvip.net/index.php?url=' + params.playUrl
            document.title = params.title
        } else {
            data.src = ''
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/style.scss";
.iframe-box {
    width: 100vw;
    height: 100vh;
    padding: 10px;
    box-sizing: border-box;
}
</style>
