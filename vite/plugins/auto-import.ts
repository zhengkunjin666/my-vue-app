import autoImport from 'unplugin-auto-import/vite' //自动引入方法
import components from 'unplugin-vue-components/vite' //自动引入组件
import {
	ElementPlusResolver
} from 'unplugin-vue-components/resolvers' //内置主流的 UI 都有。如果没有可以自己实现一个 resolver

// 自动安装、注册图标
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default function createAutoImport() {
	const autoImportPlugin = autoImport({
		imports: ["vue", "vue-router", "pinia"], // 自动导入vue和vue-router相关函数
		resolvers: [
			ElementPlusResolver(), // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
			IconsResolver({ // 自动导入图标组件
				prefix: 'Icon',
			})
		],
		// dts: "./auto-import.d.ts", //自定义文件生成的位置与是否生成，默认是根目录下。运行会自动生成 `auto-import.d.ts` 全局声明
		dts: true,
		eslintrc: {
			enabled: false
		}
	})

	const componentsPlugin = components({
		// dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
		resolvers: [
			ElementPlusResolver(), // 自动导入 Element Plus 组件
			IconsResolver({ // 自动注册图标组件
				enabledCollections: [
					'ep'
				], // 使用element-plus的图标库，其他图标库请到 https://icon-sets.iconify.design/
			}),
		],
		// dts: './components.d.ts',
	})

	const iconsPlugin = Icons({
		autoInstall: true //自动检测下载、安装图标库
	})

	return [autoImportPlugin, componentsPlugin, iconsPlugin]
}