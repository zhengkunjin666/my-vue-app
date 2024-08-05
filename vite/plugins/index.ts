import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import' //自动引入方法、组件插件
import createSvgIcon from './svg-icon' //自定义svg插件
import createCompression from './compression' //压缩工具插件
import createEslint from './eslint' //代码规范校验插件
import createInspect from './inspect' //开发调试插件
import createVisualizer from './visualizer' //开发调试插件

//isBuild：是否编译正式环境
export default function createVitePlugins(isBuild = false) {
	const vitePlugins = [vue()]
	isBuild && vitePlugins.push(createEslint())
	
	
	vitePlugins.push(createSvgIcon(isBuild))
	
	vitePlugins.push(...createAutoImport())
	
	isBuild && vitePlugins.push(createCompression())
	isBuild && vitePlugins.push(createInspect())
	
	vitePlugins.push(createVisualizer() as any)

	return vitePlugins
}