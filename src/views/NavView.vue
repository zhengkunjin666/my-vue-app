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
const router = useRouter()
const route = useRoute()
const radio1 = ref('tv-play')
const visible = ref(false)
const type = ref('iqiyi')
const types = ref([
    {
        value: 'iqiyi',
        label: '爱奇艺',
    },
    {
        value: 'tencent',
        label: '腾讯视频',
    },
    {
        value: 'bilibili',
        label: '哔哩哔哩',
    },
])
watch(
    () => router.currentRoute.value.path,
    (toPath) => {
        const pathArr = toPath.split('/').filter((item) => item)
        type.value = pathArr[0]
        radio1.value = pathArr[1]
        document.title = route.meta.title as any
        console.log(toPath, toPath !== '/play', type.value)
        if (toPath !== '/play') {
            document.getElementsByTagName('link')[0].remove()
            const linkzh = document.createElement('link')
            linkzh.setAttribute('type', 'image/svg+xml')
            linkzh.setAttribute('rel', 'icon')
            linkzh.setAttribute('href', '/' + type.value + '.svg')
            document.head.appendChild(linkzh)
        }
    },
    { immediate: true, deep: true }
)
const handleTo = () => {
    router.replace({
        path: `/${type.value}/${radio1.value}`,
    })
}
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
