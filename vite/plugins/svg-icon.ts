import {
    createSvgIconsPlugin
} from 'vite-plugin-svg-icons'
import path from 'path'

// 自定义svg图标
export default function createSvgIcon(isBuild: boolean) {
    return createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')], // 指定需要缓存的图标文件夹
        symbolId: 'icon-[name]', // 指定symbolId格式
        svgoOptions: isBuild
    })
}