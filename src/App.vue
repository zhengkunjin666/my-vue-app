<!-- <template>
    <router-view />
</template> -->
<template>
    <div
        class="z-flex z-m-t-10"
        v-show="router.currentRoute.value.fullPath !== '/play'"
    >
        <div class="nav">
            <div class="nav-show">
                <svg-icon :name="type" class="nav-icon" />
                <el-icon class="z-m-l-10" :class="visible ? 'visible-icon' : ''"
                    ><IEpArrowDownBold
                /></el-icon>
            </div>
            <el-select
                class="nav-select"
                popper-class="nav-select-popper"
                v-model="type"
                :clearable="false"
                @visible-change="(e: boolean) => visible = e"
                @change="handleTo"
            >
                <el-option
                    v-for="item in types"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                    <div class="z-flex z-row-between z-p-t-5 z-p-b-5">
                        <svg-icon :name="item.value" class="nav-icon" />
                        <span class="z-m-l-20">{{ item.label }}</span>
                    </div>
                </el-option>
            </el-select>
        </div>
        <el-radio-group v-model="radio1" size="large" @change="handleTo">
            <el-radio-button label="综艺" value="variety" />
            <el-radio-button label="电视剧" value="tv-play" />
            <el-radio-button label="电影" value="movie" />
            <el-radio-button label="动漫" value="animation" />
        </el-radio-group>
    </div>
    <!-- 使用路由缓存 -->
    <router-view v-slot="{ Component, route }">
        <transition
            name="fade-transform"
            mode="out-in"
            v-if="!route.meta.keepAlive"
        >
            <component :is="Component" :key="route.name" />
        </transition>
        <transition name="fade-transform" mode="out-in" v-else>
            <keep-alive>
                <component :is="Component" :key="route.name" />
            </keep-alive>
        </transition>
    </router-view>
    <!-- 使用路由缓存 -->
</template>

<script lang="ts" setup>
import iqiyi from '@/assets/icons/svg/iqiyi.svg'
import tencent from '@/assets/icons/svg/tencent.svg'
// import bilibili from "@/assets/icons/svg/bilibili.svg"
const router = useRouter()
const route = useRoute()
const radio1 = ref('variety')
const visible = ref(false)
const type = ref('iqiyi')
const types = ref([
    {
        value: 'iqiyi',
        label: '爱奇艺',
        svg: iqiyi,
    },
    {
        value: 'tencent',
        label: '腾讯视频',
        svg: tencent,
    },
    // {
    //     value: 'bilibili',
    //     label: '哔哩哔哩',
    //     svg: bilibili
    // },
])
watch(
    () => router.currentRoute.value.path,
    (toPath) => {
        const path = toPath.replace('/', '')
        const pathArr = path.split('-', 3)
        type.value = pathArr[0]
        radio1.value = pathArr[2] ? pathArr[1] + '-' + pathArr[2] : pathArr[1]
        document.title = route.meta.title as any
        console.log(toPath, toPath !== '/play', type.value, radio1.value)
        if (toPath !== '/play') {
            const svg = types.value.filter(
                (item) => item.value === type.value
            )[0]?.svg
            document.getElementById('link-svg')?.remove()
            const linkzh = document.createElement('link')
            linkzh.setAttribute('id', 'link-svg')
            linkzh.setAttribute('type', 'image/svg+xml')
            linkzh.setAttribute('rel', 'icon')
            // linkzh.setAttribute('href', './' + type.value + '.svg')
            linkzh.setAttribute('href', svg)
            document.head.appendChild(linkzh)
        }
    },
    { immediate: true, deep: true }
)
const handleTo = () => {
    router.replace({
        path: `/${type.value}-${radio1.value}`,
    })
}
onMounted(() => { 
    fetch('/page/searchOne/id/d58ef062578604a3.html', {
            referrer: '',
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({keyword: 5644654}), // body data type must match "Content-Type" header
    })
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((res) => {
            console.log('Success:', res)
        })
        .catch((error) => {
            console.error('Error:', error)
        })

        const params = {
             iid: '9c383804755b9d31',
      verify: undefined,
      userAgent: 'Mozilla/5.0 (Linux; Android 14; 23127PN0CC Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160065 MMWEBSDK/20231202 MicroMessenger/8.0.47.2560(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
      appCodeName: 'Mozilla',
      appName: 'Netscape',
      appVersion: '5.0 (Linux; Android 14; 23127PN0CC Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36',
      cookieEnabled: true,
      language:  'zh-CN',
      platform: 'Linux armv8l',
      js_lib_ver: 1.01,
      hx: null,
      token: "",
      magic: "",
        }
        
    fetch('/page/votedsf/id/d58ef062578604a3/v/2.html', {
        referrer: '',
    //   mode: 'cors',
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params), // body data type must match "Content-Type" header
    })
        .then(async (response) => {
            console.log(response)
            if (response.headers.get('Content-Type') !== 'application/json') { 
                console.log(await response.text()); 
            }
            return response.json()
        })
        .then((res) => {
            console.log('Success:', res)
        })
        .catch((error) => {
            console.error('Error:', error)
        })

})
</script>
<style lang="scss">
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
    box-shadow: 0 0 5px 0 rgba(2, 2, 2, 0.2);
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
                    background: url('@/assets/image/play-btn.png') center center
                        no-repeat;
                }
                .el-image {
                    filter: brightness(0.8);
                }
            }
        }
    }
}
.nav {
    position: relative;
    margin-right: 20px;
    .nav-show {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        .el-icon {
            font-size: 20px;
            color: #409eff;
            transition: all 0.5s;
        }
        .visible-icon {
            transform: rotate(180deg);
        }
        & + .nav-select {
            opacity: 0;
            width: 60px;
        }
    }
    .nav-icon {
        width: 30px;
        height: 30px;
    }
}
.nav-select-popper {
    .el-select-dropdown__item {
        height: auto;
    }
    .nav-icon {
        width: 30px;
        height: 30px;
    }
}
</style>
