<template>
    <div class="z-m-t-15">
        <el-form @submit.prevent>
            <el-input
                v-model="data.key"
                placeholder="请输入电视剧搜索"
                :clearable="true"
                @change="getList($event, 0)"
            >
                <template #append>
                    <el-button type="primary" @click="getList(data.key, 0)">
                        <el-icon><IEpSearch /></el-icon>
                    </el-button>
                </template>
            </el-input>
        </el-form>
    </div>
    <div
        id="scrollbar"
        class="z-flex-1 z-m-t-20 z-p-l-20 z-p-r-20 z-p-b-20"
        style="height: 10%"
    >
        <el-scrollbar
            ref="scrollbarRef"
            :height="data.height"
            always
            @scroll="scroll"
        >
            <div
                class="list"
                v-infinite-scroll="load"
                :infinite-scroll-distance="500"
            >
                <div class="item" v-for="item in data.list" :key="item.title">
                    <div class="image" @click="handleToPlay(item)">
                        <el-image
                            :src="item.imageUrl || item.albumInfo.img"
                            referrerpolicy="no-referrer"
                        />
                        <i></i>
                    </div>
                    <div class="z-m-t-10 z-m-b-20">
                        <span class="z-line-1">{{
                            item.title || item.albumInfo.title
                        }}</span>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
    <div class="to-top" @click="handleScrollTop">
        <el-icon><IEpTop /></el-icon>
    </div>
</template>

<script setup lang="ts">
const data = reactive({
    pageNum: 1,
    pageSize: 40,
    key: '',
    list: [] as any,
    scrollTopValue: 0,
    height: '',
    isFirst: true,
})
onMounted(() => {
    getData()
    changeHeight()
    window.addEventListener('resize', changeHeight)
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', changeHeight)
})
const changeHeight = () => {
    nextTick(() => {
        const dom = document.getElementById('scrollbar')
        data.height = dom?.getBoundingClientRect().height + 'px'
    })
}
const load = () => {
    if (data.isFirst) {
        return
    }
    data.pageNum++
    if (!data.key) {
        getData()
    } else {
        getList(data.key, data.pageNum)
    }
}
const getData = () => {
    const url = `https://pcw-api.iqiyi.com/search/recommend/list?channel_id=2&data_type=1&mode=24&page_id=${data.pageNum}&ret_num=${data.pageSize}`
    fetch(url)
        .then((response) => response.json())
        .then((res) => {
            console.log('Success:', res)
            if (data.pageNum === 1) {
                data.list = []
                handleScrollTop()
            }
            data.isFirst = false
            data.list = data.list.concat(res.data.list)
        })
        .catch((error) => {
            console.error('Error:', error)
            ElMessage.error({
                message: error,
                offset: 100,
            })
        })
}
const getList = (key: string, pageNum: number) => {
    if (!pageNum) {
        data.pageNum = 1
    }
    if (key) {
        // 搜索网址
        const url = `https://mesh.if.iqiyi.com/portal/lw/search/homePageV3?key=${key}&pageNum=${data.pageNum}&pageSize=40`
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                console.log('Success:', res)
                if (data.pageNum === 1) {
                    data.list = []
                    handleScrollTop()
                }
                data.list = data.list.concat(res.data.templates)
            })
            .catch((error) => {
                console.error('Error:', error)
                ElMessage.error({
                    message: error,
                    offset: 100,
                })
            })
    } else {
        data.pageNum = 0
        load()
    }
}
const scroll = (e: any) => {
    data.scrollTopValue = e.scrollTop
}
const scrollbarRef = ref()
const handleScrollTop = () => {
    if (data.scrollTopValue > 0) {
        window.requestAnimationFrame(handleScrollTop)
        scrollbarRef.value!.setScrollTop(0)
        // scrollbarRef.value!.setScrollTop(
        //     data.scrollTopValue - data.scrollTopValue / 8
        // )
    }
}
const router = useRouter()
const handleToPlay = (item: any) => {
    const params = JSON.stringify(item)
    router.push({
        name: 'play',
        state: { params: params },
    })
}
</script>
<style lang="scss" scoped>
.to-top {
    font-size: 30px;
    font-weight: bold;
    position: fixed;
    bottom: 100px;
    right: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #a0cfff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .el-icon {
        color: #409eff;
    }
    &:hover {
        opacity: 0.8;
    }
}
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
        width: 165px;
        display: flex;
        flex-direction: column;
        .image {
            width: 100%;
            position: relative;
            .el-image {
                width: 100%;
                height: 100%;
                border-radius: 10px;
                cursor: pointer;
            }
            i {
                width: 50%;
                height: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                cursor: pointer;
            }
            &:hover {
                i {
                    background: url('@/assets/image/play-btn.png')
                        center center no-repeat;
                }
                .el-image {
                    filter: brightness(0.8);
                }
            }
        }
    }
}
</style>
