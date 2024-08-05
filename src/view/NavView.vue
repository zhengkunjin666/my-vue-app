<template>
    <el-radio-group v-model="radio1" size="large" class="z-m-t-10">
        <el-radio-button label="电视剧" value="New York" />
        <el-radio-button label="电影" value="Washington" />
        <el-radio-button label="动漫" value="Los Angeles" />
        <el-radio-button label="历史记录" value="Chicago" />
    </el-radio-group>
    <router-view />
</template>

<script lang='ts' setup>
const radio1 = ref("")
</script>

<style scoped lang='scss'>

</style>
