<template>
    <div class="z-flex-1 z-flex-col" style="height: 10%">
        <!-- <div class="z-m-t-15">
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
        </div> -->
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
                        :key="item.params.title"
                    >
                        <div class="image" @click="handleToPlay(item)">
                            <el-image
                                :src="item.params.new_pic_vt"
                                referrerpolicy="no-referrer"
                                lazy
                            />
                            <i></i>
                        </div>
                        <div class="z-m-t-10 z-m-b-20">
                            <span
                                class="z-line-1"
                                :title="item.params.title"
                                >{{ item.params.title }}</span
                            >
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
    pageSize: 30,
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
    const url =
        'https://pbaccess.video.qq.com/trpc.vector_layout.page_view.PageService/getPage?video_appid=3000010'
    const params = {
        page_context: {
            page_size: data.pageSize.toString(),
            page_index: (data.pageNum - 1).toString(),
        },
        page_params: {
            page_id: 'channel_list_second_page',
            page_type: 'operation',
            channel_id: '100201',
            filter_params: 'iarea=-1&itype=-1&iyear=-1&sort=75',
            page: '0',
        },
        page_bypass_params: {
            params: {
                caller_id: '3000010',
                data_mode: 'default',
                page_id: 'channel_list_second_page',
                page_type: 'operation',
                platform_id: '2',
                user_mode: 'default',
            },
            scene: 'operation',
            abtest_bypass_id: '',
        },
    }
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params), // body data type must match "Content-Type" header
    })
        .then((response) => response.json())
        .then((res) => {
            console.log('Success:', res)
            if (data.pageNum === 1) {
                data.list = []
                handleScrollTop()
            }
            data.isFirst = false
            const result =
                data.pageNum === 1
                    ? res.data.CardList[1].children_list.list.cards
                    : res.data.CardList[0].children_list.list.cards
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
        const url = `https://mesh.if.iqiyi.com/portal/lw/search/homePageV3?key=${key}&pageNum=${data.pageNum}&pageSize=40`
        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                console.log('Success:', res)
                if (res.code === 0) {
                    if (data.pageNum === 1) {
                        data.list = []
                        handleScrollTop()
                    }
                    res.data.templates.forEach(
                        (element: any, index: number) => {
                            if (
                                element.intentAlbumInfos &&
                                element.intentAlbumInfos.length > 0
                            ) {
                                const intentAlbumInfos = [] as any
                                element.intentAlbumInfos.forEach(
                                    (item: any) => {
                                        item.img = item.img.replace(
                                            '.jpg',
                                            '_579_772.jpg'
                                        )
                                        const result = {} as any
                                        result.albumInfo = item
                                        intentAlbumInfos.push(result)
                                    }
                                )
                                res.data.templates.splice(
                                    index,
                                    1,
                                    ...intentAlbumInfos
                                )
                            }
                        }
                    )
                    data.list = data.list.concat(res.data.templates)
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
    const url = `/x/api/float_vinfo2?cid=${item.params.cid}`
    fetch(url)
        .then((response) => response.json())
        .then((res) => {
            console.log('Success:', res)
            const vid = res.c.video_ids[0]
            const param = {
                title: item.params.title,
                playUrl: `https://v.qq.com/x/cover/${item.params.cid}/${vid}.html`,
            }
            const params = JSON.stringify(param)
            router.push({
                name: 'play',
                state: { params: params, type: 'tencent' },
            })
        })
        .catch((error) => {
            console.error('Error:', error)
            ElMessage.error({
                message: error,
                offset: 100,
            })
        })
}
</script>
