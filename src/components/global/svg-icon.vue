<template>
	<!-- svg:图标外层容器节点,内部需要与use标签结合使用 -->
	<svg class="svg-icon">
		<!-- xlink:href执行用哪一个图标,属性值务必#icon-图标名字 -->
		<!-- use标签fill属性可以设置图标的颜色 -->
		<use :xlink:href="prefix + name" :fill="color" />
	</svg>
</template>

<script setup lang="ts">
	withDefaults(defineProps<{
		prefix ?: string,
		name ?: string,
		color ?: string,
		width ?: string,
		height ?: string
	}>(), {
		prefix: '#icon-',
		color: '',
		width: '16',
		height: '16'
	})

	//接受父组件传递过来的参数
	// defineProps({
	// 	//xlink:href属性值前缀
	// 	prefix: {
	// 		type: String,
	// 		default: '#icon-'
	// 	},
	// 	//提供使用的图标名字
	// 	name: String,
	// 	//接受父组件传递颜色
	// 	color: {
	// 		type: String,
	// 		default: ''
	// 	},
	// 	//接受父组件传递过来的图标的宽度
	// 	width: {
	// 		type: String,
	// 		default: '16'
	// 	},
	// 	//接受父组件传递过来的图标的高度
	// 	height: {
	// 		type: String,
	// 		default: '16'
	// 	}
	// })
</script>

<style scoped>
.svg-icon {
    width: 16px;
    height: 16px;
}
</style>