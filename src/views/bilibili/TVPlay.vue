<template>
    <div class="z-flex-1 z-flex-col" style="height: 10%">
        <div class="z-m-t-15">
            <el-form @submit.prevent>
                <el-input
                    v-model="data.key"
                    placeholder="请输入剧名搜索"
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
            class="z-flex-1 z-m-t-20 z-p-b-20"
            style="height: 10%"
        >
            <el-scrollbar
                ref="scrollbarRef"
                class="z-p-l-20 z-p-r-20"
                :height="data.height"
                always
                @scroll="scroll"
            >
                <div
                    class="list"
                    v-infinite-scroll="load"
                    :infinite-scroll-distance="500"
                >
                    <div
                        class="item"
                        v-for="item in data.list"
                        :key="item.title"
                        v-show="item.title"
                    >
                        <div class="image" @click="handleToPlay(item)">
                            <el-image
                                :src="item.cover || item.pic"
                                referrerpolicy="no-referrer"
                                lazy
                            />
                            <i></i>
                        </div>
                        <div class="z-m-t-10 z-m-b-20">
                            <span class="z-line-1" :title="item.title">{{
                                item.title
                            }}</span>
                        </div>
                    </div>
                </div>
            </el-scrollbar>
        </div>
        <div
            class="to-top"
            @click="handleScrollTop"
            v-show="data.scrollTopValue > 600"
        >
            <el-icon><IEpTop /></el-icon>
        </div>
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
onActivated(() => {
    scrollbarRef.value!.setScrollTop(data.scrollTopValue)
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
    const url = `/pgc/season/index/result?area=-1&style_id=-1&release_date=-1&season_status=-1&order=0&st=5&sort=0&page=${data.pageNum}&season_type=5&pagesize=${data.pageSize}&type=1`
    fetch(url)
        .then((response) => response.json())
        .then((res) => {
            console.log('Success:', res)
            if (data.pageNum === 1) {
                data.list = []
                handleScrollTop()
            }
            data.isFirst = false
            const result = res.data.list
            data.list = data.list.concat(result)
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
        const url = `/search/all?spm_id_from=333.976.0.0&keyword=${key}&search_type=&page=${data.pageNum}&page_size=${data.pageSize}`
        fetch(url, {
            referrer: '',
        })
            .then((response) => response.json())
            .then((res) => {
                console.log('Success:', res)
                if (res.code === 0) {
                    if (data.pageNum === 1) {
                        data.list = []
                        handleScrollTop()
                    }
                    const result = [] as any
                    Object.keys(res.data.result).forEach((item) => {
                        if (
                            res.data.result[item] &&
                            res.data.result[item].length > 0
                        ) {
                            res.data.result[item].forEach((element: any) => {
                                element.title =
                                    (element.title &&
                                        element.title.replace(
                                            /<(.+?)>/g,
                                            ''
                                        )) ||
                                    element.title
                                if (data.list.length > 0) {
                                    const arr = data.list.filter(
                                        (ele: any) =>
                                            (ele.url &&
                                                ele.url === element.url) ||
                                            (ele.arcurl &&
                                                ele.arcurl === element.arcurl)
                                    )
                                    if (arr.length === 0) {
                                        result.push(element)
                                    }
                                } else {
                                    result.push(element)
                                }
                            })
                        }
                    })
                    data.list = data.list.concat(result)
                } else {
                    ElMessage.error({
                        message: '已经到底，没有数据了！',
                        offset: 100,
                    })
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
    console.log(item)
    const param = {
        title: item.title,
        playUrl: item.link || item.url || item.arcurl,
    }
    const params = JSON.stringify(param)
    console.log(item.link || item.url || item.arcurl)
    router.push({
        name: 'play',
        state: { params: params, type: 'bilibili' },
    })
}
</script>
