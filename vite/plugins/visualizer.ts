import { visualizer } from 'rollup-plugin-visualizer'

//打包分析工具
export default function createVisualizer() {
	return visualizer({
		open: true // 打包后自动打开分析报告
	}) as any
}