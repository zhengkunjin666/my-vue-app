<template>
    <el-radio-group
        v-model="radio1"
        size="large"
        class="z-m-t-10"
        @change="handleTo"
        v-show="router.currentRoute.value.fullPath !== '/play'"
    >
        <el-radio-button label="电视剧" value="tv-play" />
        <el-radio-button label="电影" value="movie" />
        <el-radio-button label="动漫" value="animation" />
    </el-radio-group>
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
const radio1 = ref('tv-play')
onMounted(() => {
    setTimeout(() => {
        radio1.value = router.currentRoute.value.fullPath.replace('/', '')
    }, 500)
})
const handleTo = (e: any) => {
    router.push({
        path: e,
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
</style>
