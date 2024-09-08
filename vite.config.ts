import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
    //dev环境：command === 'serve'  build环境：command === 'build'
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。不传默认是暴露VITE前缀的
    const env = loadEnv(mode, process.cwd())
    return {
        base: './',
        resolve: {
            // https://cn.vitejs.dev/config/#resolve-alias
            alias: {
                '~': path.resolve(__dirname, './'),
                '@': path.resolve(__dirname, './src') //设置别名。将src目录配置别名为 @ 方便在项目中导入src目录下的文件
            },
            // https://cn.vitejs.dev/config/#resolve-extensions
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
        },
        build: {
            outDir: 'docs',//想要把dist修改成什么名字在这边改
        },
        plugins: createVitePlugins(command === 'build'),
        // 本地运行配置
        server: {
            host: '0.0.0.0', //指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
            port: 9999, // 访问端口号
            cors: true, // 默认启用并允许任何源
            open: true, // 在服务器启动时自动在浏览器中打开应用程序
            proxy: {
                // '/api': {
                //     target: 'https://pbaccess.video.qq.com/', //接口域名
                //     changeOrigin: true,             //是否跨域
                //     ws: true,                       //是否代理 websockets
                //     secure: true,                   //是否https接口
                //     pathRewrite: {                  //路径重置
                //         '^/api': ''
                //     }
                // },
                '/x': {
                    target: 'https://node.video.qq.com/', //接口域名
                    changeOrigin: true,             //是否跨域
                    pathRewrite: {                  //路径重置
                        '^/x': '/x'
                    }
                },
                '/pgc': {
                    target: 'https://api.bilibili.com/', //接口域名
                    changeOrigin: true,             //是否跨域
                    pathRewrite: {                  //路径重置
                        '^/pgc': '/pgc'
                    }
                },
                '/search': {
                    target: 'https://api.bilibili.com/x/web-interface/', //接口域名
                    changeOrigin: true,             //是否跨域
                    pathRewrite: {                  //路径重置
                        '^/search': '/search'
                    }
                }
            }
        }
    }
})
