// vite.config.ts
import { defineConfig, loadEnv } from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+vite@5.3.4_@types+node@22.0.0_sass@1.77.8/node_modules/vite/dist/node/index.js";
import path2 from "path";

// vite/plugins/index.ts
import vue from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@5.0.5_vite@5.3.4_vue@3.4.31/node_modules/@vitejs/plugin-vue/dist/index.mjs";

// vite/plugins/auto-import.ts
import autoImport from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+unplugin-auto-import@0.18.2/node_modules/unplugin-auto-import/dist/vite.js";
import components from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.27.3_vue@3.4.31/node_modules/unplugin-vue-components/dist/vite.js";
import {
  ElementPlusResolver
} from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.27.3_vue@3.4.31/node_modules/unplugin-vue-components/dist/resolvers.js";
import Icons from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+unplugin-icons@0.19.1/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+unplugin-icons@0.19.1/node_modules/unplugin-icons/dist/resolver.js";
function createAutoImport() {
  const autoImportPlugin = autoImport({
    imports: ["vue", "vue-router", "pinia"],
    // 自动导入vue和vue-router相关函数
    resolvers: [
      ElementPlusResolver(),
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      IconsResolver({
        // 自动导入图标组件
        prefix: "Icon"
      })
    ],
    // dts: "./auto-import.d.ts", //自定义文件生成的位置与是否生成，默认是根目录下。运行会自动生成 `auto-import.d.ts` 全局声明
    dts: true,
    eslintrc: {
      enabled: false
    }
  });
  const componentsPlugin = components({
    // dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
    resolvers: [
      ElementPlusResolver(),
      // 自动导入 Element Plus 组件
      IconsResolver({
        // 自动注册图标组件
        enabledCollections: [
          "ep"
        ]
        // 使用element-plus的图标库，其他图标库请到 https://icon-sets.iconify.design/
      })
    ]
    // dts: './components.d.ts',
  });
  const iconsPlugin = Icons({
    autoInstall: true
    //自动检测下载、安装图标库
  });
  return [autoImportPlugin, componentsPlugin, iconsPlugin];
}

// vite/plugins/svg-icon.ts
import {
  createSvgIconsPlugin
} from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-svg-icons@2.0.1_vite@5.3.4/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
function createSvgIcon(isBuild) {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
    // 指定需要缓存的图标文件夹
    symbolId: "icon-[name]",
    // 指定symbolId格式
    svgoOptions: isBuild
  });
}

// vite/plugins/compression.ts
import compression from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-compression@0.5.1_vite@5.3.4/node_modules/vite-plugin-compression/dist/index.mjs";
function createCompression() {
  return compression({
    threshold: 1024e3
    // 对大于 1M 的文件进行压缩，单位是字节，默认为 0
    // deleteOriginFile: false, // 压缩后是否删除原文件，默认为 false
    // verbose: true, //是否在控制台输出压缩结果，默认为 true
    // disable: false, //是否禁用压缩，默认为 false
    // algorithm: 'gzip', // 压缩算法，默认是 gzip。可选 [ ‘gzip’ , ‘brotliCompress’ ,‘deflate’ , ‘deflateRaw’]
    // ext: '.gz' // 生成的压缩包后缀
  });
}

// vite/plugins/eslint.ts
import eslintPlugin from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-eslint@1.8.1_eslint@9.8.0_vite@5.3.4/node_modules/vite-plugin-eslint/dist/index.mjs";
function createEslint() {
  return eslintPlugin({
    include: ["src/**/*.js", "src/**/*.ts", "src/**/*.vue", "src/*.js", "src/*.ts", "src/*.vue"]
  });
}

// vite/plugins/inspect.ts
import inspect from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-inspect@0.8.5_vite@5.3.4/node_modules/vite-plugin-inspect/dist/index.mjs";
function createInspect() {
  return inspect();
}

// vite/plugins/visualizer.ts
import { visualizer } from "file:///F:/%E4%BD%9C%E4%B8%9A%E5%92%8C%E7%BB%83%E4%B9%A0/assignment/2024-08/my-vue-app/node_modules/.pnpm/registry.npmmirror.com+rollup-plugin-visualizer@5.12.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
function createVisualizer() {
  return visualizer({
    open: true
    // 打包后自动打开分析报告
  });
}

// vite/plugins/index.ts
function createVitePlugins(isBuild = false) {
  const vitePlugins = [vue()];
  isBuild && vitePlugins.push(createEslint());
  vitePlugins.push(createSvgIcon(isBuild));
  vitePlugins.push(...createAutoImport());
  isBuild && vitePlugins.push(createCompression());
  isBuild && vitePlugins.push(createInspect());
  vitePlugins.push(createVisualizer());
  return vitePlugins;
}

// vite.config.ts
var __vite_injected_original_dirname = "F:\\\u4F5C\u4E1A\u548C\u7EC3\u4E60\\assignment\\2024-08\\my-vue-app";
var vite_config_default = defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: "./",
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        "~": path2.resolve(__vite_injected_original_dirname, "./"),
        "@": path2.resolve(__vite_injected_original_dirname, "./src")
        //设置别名。将src目录配置别名为 @ 方便在项目中导入src目录下的文件
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    build: {
      outDir: "docs"
      //想要把dist修改成什么名字在这边改
    },
    plugins: createVitePlugins(command === "build"),
    // 本地运行配置
    server: {
      host: "0.0.0.0",
      //指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
      port: 9999,
      // 访问端口号
      cors: true,
      // 默认启用并允许任何源
      open: true,
      // 在服务器启动时自动在浏览器中打开应用程序
      proxy: {
        "/api": {
          target: "https://pbaccess.video.qq.com/",
          //接口域名
          changeOrigin: true,
          //是否跨域
          ws: true,
          //是否代理 websockets
          secure: true,
          //是否https接口
          pathRewrite: {
            //路径重置
            "^/api": ""
          }
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS9wbHVnaW5zL2luZGV4LnRzIiwgInZpdGUvcGx1Z2lucy9hdXRvLWltcG9ydC50cyIsICJ2aXRlL3BsdWdpbnMvc3ZnLWljb24udHMiLCAidml0ZS9wbHVnaW5zL2NvbXByZXNzaW9uLnRzIiwgInZpdGUvcGx1Z2lucy9lc2xpbnQudHMiLCAidml0ZS9wbHVnaW5zL2luc3BlY3QudHMiLCAidml0ZS9wbHVnaW5zL3Zpc3VhbGl6ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxcdTRGNUNcdTRFMUFcdTU0OENcdTdFQzNcdTRFNjBcXFxcYXNzaWdubWVudFxcXFwyMDI0LTA4XFxcXG15LXZ1ZS1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFx1NEY1Q1x1NEUxQVx1NTQ4Q1x1N0VDM1x1NEU2MFxcXFxhc3NpZ25tZW50XFxcXDIwMjQtMDhcXFxcbXktdnVlLWFwcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovJUU0JUJEJTlDJUU0JUI4JTlBJUU1JTkyJThDJUU3JUJCJTgzJUU0JUI5JUEwL2Fzc2lnbm1lbnQvMjAyNC0wOC9teS12dWUtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgY3JlYXRlVml0ZVBsdWdpbnMgZnJvbSAnLi92aXRlL3BsdWdpbnMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSwgY29tbWFuZCB9KSA9PiB7XG4gICAgLy9kZXZcdTczQUZcdTU4ODNcdUZGMUFjb21tYW5kID09PSAnc2VydmUnICBidWlsZFx1NzNBRlx1NTg4M1x1RkYxQWNvbW1hbmQgPT09ICdidWlsZCdcbiAgICAvLyBcdTY4MzlcdTYzNkVcdTVGNTNcdTUyNERcdTVERTVcdTRGNUNcdTc2RUVcdTVGNTVcdTRFMkRcdTc2ODQgYG1vZGVgIFx1NTJBMFx1OEY3RCAuZW52IFx1NjU4N1x1NEVGNlxuICAgIC8vIFx1OEJCRVx1N0Y2RVx1N0IyQ1x1NEUwOVx1NEUyQVx1NTNDMlx1NjU3MFx1NEUzQSAnJyBcdTY3NjVcdTUyQTBcdThGN0RcdTYyNDBcdTY3MDlcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdUZGMENcdTgwMENcdTRFMERcdTdCQTFcdTY2MkZcdTU0MjZcdTY3MDkgYFZJVEVfYCBcdTUyNERcdTdGMDBcdTMwMDJcdTRFMERcdTRGMjBcdTlFRDhcdThCQTRcdTY2MkZcdTY2QjRcdTk3MzJWSVRFXHU1MjREXHU3RjAwXHU3Njg0XG4gICAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKVxuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2U6ICcuLycsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vY24udml0ZWpzLmRldi9jb25maWcvI3Jlc29sdmUtYWxpYXNcbiAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgJ34nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi8nKSxcbiAgICAgICAgICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpIC8vXHU4QkJFXHU3RjZFXHU1MjJCXHU1NDBEXHUzMDAyXHU1QzA2c3JjXHU3NkVFXHU1RjU1XHU5MTREXHU3RjZFXHU1MjJCXHU1NDBEXHU0RTNBIEAgXHU2NUI5XHU0RkJGXHU1NzI4XHU5ODc5XHU3NkVFXHU0RTJEXHU1QkZDXHU1MTY1c3JjXHU3NkVFXHU1RjU1XHU0RTBCXHU3Njg0XHU2NTg3XHU0RUY2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9jbi52aXRlanMuZGV2L2NvbmZpZy8jcmVzb2x2ZS1leHRlbnNpb25zXG4gICAgICAgICAgICBleHRlbnNpb25zOiBbJy5tanMnLCAnLmpzJywgJy50cycsICcuanN4JywgJy50c3gnLCAnLmpzb24nLCAnLnZ1ZSddXG4gICAgICAgIH0sXG4gICAgICAgIGJ1aWxkOiB7XG4gICAgICAgICAgICBvdXREaXI6ICdkb2NzJywvL1x1NjBGM1x1ODk4MVx1NjI4QWRpc3RcdTRGRUVcdTY1MzlcdTYyMTBcdTRFQzBcdTRFNDhcdTU0MERcdTVCNTdcdTU3MjhcdThGRDlcdThGQjlcdTY1MzlcbiAgICAgICAgfSxcbiAgICAgICAgcGx1Z2luczogY3JlYXRlVml0ZVBsdWdpbnMoY29tbWFuZCA9PT0gJ2J1aWxkJyksXG4gICAgICAgIC8vIFx1NjcyQ1x1NTczMFx1OEZEMFx1ODg0Q1x1OTE0RFx1N0Y2RVxuICAgICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgICAgIGhvc3Q6ICcwLjAuMC4wJywgLy9cdTYzMDdcdTVCOUFcdTY3MERcdTUyQTFcdTU2NjhcdTVFOTRcdThCRTVcdTc2RDFcdTU0MkNcdTU0RUFcdTRFMkEgSVAgXHU1NzMwXHU1NzQwXHUzMDAyIFx1NTk4Mlx1Njc5Q1x1NUMwNlx1NkI2NFx1OEJCRVx1N0Y2RVx1NEUzQSAwLjAuMC4wIFx1NjIxNlx1ODAwNSB0cnVlIFx1NUMwNlx1NzZEMVx1NTQyQ1x1NjI0MFx1NjcwOVx1NTczMFx1NTc0MFx1RkYwQ1x1NTMwNVx1NjJFQ1x1NUM0MFx1NTdERlx1N0Y1MVx1NTQ4Q1x1NTE2Q1x1N0Y1MVx1NTczMFx1NTc0MFx1MzAwMlxuICAgICAgICAgICAgcG9ydDogOTk5OSwgLy8gXHU4QkJGXHU5NUVFXHU3QUVGXHU1M0UzXHU1M0Y3XG4gICAgICAgICAgICBjb3JzOiB0cnVlLCAvLyBcdTlFRDhcdThCQTRcdTU0MkZcdTc1MjhcdTVFNzZcdTUxNDFcdThCQjhcdTRFRkJcdTRGNTVcdTZFOTBcbiAgICAgICAgICAgIG9wZW46IHRydWUsIC8vIFx1NTcyOFx1NjcwRFx1NTJBMVx1NTY2OFx1NTQyRlx1NTJBOFx1NjVGNlx1ODFFQVx1NTJBOFx1NTcyOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NEUyRFx1NjI1M1x1NUYwMFx1NUU5NFx1NzUyOFx1N0EwQlx1NUU4RlxuICAgICAgICAgICAgcHJveHk6IHtcbiAgICAgICAgICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9wYmFjY2Vzcy52aWRlby5xcS5jb20vJywgLy9cdTYzQTVcdTUzRTNcdTU3REZcdTU0MERcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLCAgICAgICAgICAgICAvL1x1NjYyRlx1NTQyNlx1OERFOFx1NTdERlxuICAgICAgICAgICAgICAgICAgICB3czogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgIC8vXHU2NjJGXHU1NDI2XHU0RUUzXHU3NDA2IHdlYnNvY2tldHNcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiB0cnVlLCAgICAgICAgICAgICAgICAgICAvL1x1NjYyRlx1NTQyNmh0dHBzXHU2M0E1XHU1M0UzXG4gICAgICAgICAgICAgICAgICAgIHBhdGhSZXdyaXRlOiB7ICAgICAgICAgICAgICAgICAgLy9cdThERUZcdTVGODRcdTkxQ0RcdTdGNkVcbiAgICAgICAgICAgICAgICAgICAgICAgICdeL2FwaSc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxcdTRGNUNcdTRFMUFcdTU0OENcdTdFQzNcdTRFNjBcXFxcYXNzaWdubWVudFxcXFwyMDI0LTA4XFxcXG15LXZ1ZS1hcHBcXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxcdTRGNUNcdTRFMUFcdTU0OENcdTdFQzNcdTRFNjBcXFxcYXNzaWdubWVudFxcXFwyMDI0LTA4XFxcXG15LXZ1ZS1hcHBcXFxcdml0ZVxcXFxwbHVnaW5zXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi8lRTQlQkQlOUMlRTQlQjglOUElRTUlOTIlOEMlRTclQkIlODMlRTQlQjklQTAvYXNzaWdubWVudC8yMDI0LTA4L215LXZ1ZS1hcHAvdml0ZS9wbHVnaW5zL2luZGV4LnRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcblxyXG5pbXBvcnQgY3JlYXRlQXV0b0ltcG9ydCBmcm9tICcuL2F1dG8taW1wb3J0JyAvL1x1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVx1NjVCOVx1NkNENVx1MzAwMVx1N0VDNFx1NEVGNlx1NjNEMlx1NEVGNlxyXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3N2Zy1pY29uJyAvL1x1ODFFQVx1NUI5QVx1NEU0OXN2Z1x1NjNEMlx1NEVGNlxyXG5pbXBvcnQgY3JlYXRlQ29tcHJlc3Npb24gZnJvbSAnLi9jb21wcmVzc2lvbicgLy9cdTUzOEJcdTdGMjlcdTVERTVcdTUxNzdcdTYzRDJcdTRFRjZcclxuaW1wb3J0IGNyZWF0ZUVzbGludCBmcm9tICcuL2VzbGludCcgLy9cdTRFRTNcdTc4MDFcdTg5QzRcdTgzMDNcdTY4MjFcdTlBOENcdTYzRDJcdTRFRjZcclxuaW1wb3J0IGNyZWF0ZUluc3BlY3QgZnJvbSAnLi9pbnNwZWN0JyAvL1x1NUYwMFx1NTNEMVx1OEMwM1x1OEJENVx1NjNEMlx1NEVGNlxyXG5pbXBvcnQgY3JlYXRlVmlzdWFsaXplciBmcm9tICcuL3Zpc3VhbGl6ZXInIC8vXHU1RjAwXHU1M0QxXHU4QzAzXHU4QkQ1XHU2M0QyXHU0RUY2XHJcblxyXG4vL2lzQnVpbGRcdUZGMUFcdTY2MkZcdTU0MjZcdTdGMTZcdThCRDFcdTZCNjNcdTVGMEZcdTczQUZcdTU4ODNcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVml0ZVBsdWdpbnMoaXNCdWlsZCA9IGZhbHNlKSB7XHJcblx0Y29uc3Qgdml0ZVBsdWdpbnMgPSBbdnVlKCldXHJcblx0aXNCdWlsZCAmJiB2aXRlUGx1Z2lucy5wdXNoKGNyZWF0ZUVzbGludCgpKVxyXG5cdFxyXG5cdFxyXG5cdHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlU3ZnSWNvbihpc0J1aWxkKSlcclxuXHRcclxuXHR2aXRlUGx1Z2lucy5wdXNoKC4uLmNyZWF0ZUF1dG9JbXBvcnQoKSlcclxuXHRcclxuXHRpc0J1aWxkICYmIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlQ29tcHJlc3Npb24oKSlcclxuXHRpc0J1aWxkICYmIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlSW5zcGVjdCgpKVxyXG5cdFxyXG5cdHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlVmlzdWFsaXplcigpIGFzIGFueSlcclxuXHJcblx0cmV0dXJuIHZpdGVQbHVnaW5zXHJcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXFx1NEY1Q1x1NEUxQVx1NTQ4Q1x1N0VDM1x1NEU2MFxcXFxhc3NpZ25tZW50XFxcXDIwMjQtMDhcXFxcbXktdnVlLWFwcFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFx1NEY1Q1x1NEUxQVx1NTQ4Q1x1N0VDM1x1NEU2MFxcXFxhc3NpZ25tZW50XFxcXDIwMjQtMDhcXFxcbXktdnVlLWFwcFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcYXV0by1pbXBvcnQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6LyVFNCVCRCU5QyVFNCVCOCU5QSVFNSU5MiU4QyVFNyVCQiU4MyVFNCVCOSVBMC9hc3NpZ25tZW50LzIwMjQtMDgvbXktdnVlLWFwcC92aXRlL3BsdWdpbnMvYXV0by1pbXBvcnQudHNcIjtpbXBvcnQgYXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJyAvL1x1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVx1NjVCOVx1NkNENVxyXG5pbXBvcnQgY29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJyAvL1x1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVx1N0VDNFx1NEVGNlxyXG5pbXBvcnQge1xyXG5cdEVsZW1lbnRQbHVzUmVzb2x2ZXJcclxufSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnIC8vXHU1MTg1XHU3RjZFXHU0RTNCXHU2RDQxXHU3Njg0IFVJIFx1OTBGRFx1NjcwOVx1MzAwMlx1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NTNFRlx1NEVFNVx1ODFFQVx1NURGMVx1NUI5RVx1NzNCMFx1NEUwMFx1NEUyQSByZXNvbHZlclxyXG5cclxuLy8gXHU4MUVBXHU1MkE4XHU1Qjg5XHU4OEM1XHUzMDAxXHU2Q0U4XHU1MThDXHU1NkZFXHU2ODA3XHJcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUF1dG9JbXBvcnQoKSB7XHJcblx0Y29uc3QgYXV0b0ltcG9ydFBsdWdpbiA9IGF1dG9JbXBvcnQoe1xyXG5cdFx0aW1wb3J0czogW1widnVlXCIsIFwidnVlLXJvdXRlclwiLCBcInBpbmlhXCJdLCAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjV2dWVcdTU0OEN2dWUtcm91dGVyXHU3NkY4XHU1MTczXHU1MUZEXHU2NTcwXHJcblx0XHRyZXNvbHZlcnM6IFtcclxuXHRcdFx0RWxlbWVudFBsdXNSZXNvbHZlcigpLCAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgRWxlbWVudCBQbHVzIFx1NzZGOFx1NTE3M1x1NTFGRFx1NjU3MFx1RkYwQ1x1NTk4Mlx1RkYxQUVsTWVzc2FnZSwgRWxNZXNzYWdlQm94Li4uIChcdTVFMjZcdTY4MzdcdTVGMEYpXHJcblx0XHRcdEljb25zUmVzb2x2ZXIoeyAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcclxuXHRcdFx0XHRwcmVmaXg6ICdJY29uJyxcclxuXHRcdFx0fSlcclxuXHRcdF0sXHJcblx0XHQvLyBkdHM6IFwiLi9hdXRvLWltcG9ydC5kLnRzXCIsIC8vXHU4MUVBXHU1QjlBXHU0RTQ5XHU2NTg3XHU0RUY2XHU3NTFGXHU2MjEwXHU3Njg0XHU0RjREXHU3RjZFXHU0RTBFXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NjJGXHU2ODM5XHU3NkVFXHU1RjU1XHU0RTBCXHUzMDAyXHU4RkQwXHU4ODRDXHU0RjFBXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwIGBhdXRvLWltcG9ydC5kLnRzYCBcdTUxNjhcdTVDNDBcdTU4RjBcdTY2MEVcclxuXHRcdGR0czogdHJ1ZSxcclxuXHRcdGVzbGludHJjOiB7XHJcblx0XHRcdGVuYWJsZWQ6IGZhbHNlXHJcblx0XHR9XHJcblx0fSlcclxuXHJcblx0Y29uc3QgY29tcG9uZW50c1BsdWdpbiA9IGNvbXBvbmVudHMoe1xyXG5cdFx0Ly8gZGlyczogWydzcmMvY29tcG9uZW50cyddLCAvLyBcdTkxNERcdTdGNkVcdTk3MDBcdTg5ODFcdTlFRDhcdThCQTRcdTVCRkNcdTUxNjVcdTc2ODRcdTgxRUFcdTVCOUFcdTRFNDlcdTdFQzRcdTRFRjZcdTY1ODdcdTRFRjZcdTU5MzlcdUZGMENcdThCRTVcdTY1ODdcdTRFRjZcdTU5MzlcdTRFMEJcdTc2ODRcdTYyNDBcdTY3MDlcdTdFQzRcdTRFRjZcdTkwRkRcdTRGMUFcdTgxRUFcdTUyQTggaW1wb3J0XHJcblx0XHRyZXNvbHZlcnM6IFtcclxuXHRcdFx0RWxlbWVudFBsdXNSZXNvbHZlcigpLCAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgRWxlbWVudCBQbHVzIFx1N0VDNFx1NEVGNlxyXG5cdFx0XHRJY29uc1Jlc29sdmVyKHsgLy8gXHU4MUVBXHU1MkE4XHU2Q0U4XHU1MThDXHU1NkZFXHU2ODA3XHU3RUM0XHU0RUY2XHJcblx0XHRcdFx0ZW5hYmxlZENvbGxlY3Rpb25zOiBbXHJcblx0XHRcdFx0XHQnZXAnXHJcblx0XHRcdFx0XSwgLy8gXHU0RjdGXHU3NTI4ZWxlbWVudC1wbHVzXHU3Njg0XHU1NkZFXHU2ODA3XHU1RTkzXHVGRjBDXHU1MTc2XHU0RUQ2XHU1NkZFXHU2ODA3XHU1RTkzXHU4QkY3XHU1MjMwIGh0dHBzOi8vaWNvbi1zZXRzLmljb25pZnkuZGVzaWduL1xyXG5cdFx0XHR9KSxcclxuXHRcdF0sXHJcblx0XHQvLyBkdHM6ICcuL2NvbXBvbmVudHMuZC50cycsXHJcblx0fSlcclxuXHJcblx0Y29uc3QgaWNvbnNQbHVnaW4gPSBJY29ucyh7XHJcblx0XHRhdXRvSW5zdGFsbDogdHJ1ZSAvL1x1ODFFQVx1NTJBOFx1NjhDMFx1NkQ0Qlx1NEUwQlx1OEY3RFx1MzAwMVx1NUI4OVx1ODhDNVx1NTZGRVx1NjgwN1x1NUU5M1xyXG5cdH0pXHJcblxyXG5cdHJldHVybiBbYXV0b0ltcG9ydFBsdWdpbiwgY29tcG9uZW50c1BsdWdpbiwgaWNvbnNQbHVnaW5dXHJcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXFx1NEY1Q1x1NEUxQVx1NTQ4Q1x1N0VDM1x1NEU2MFxcXFxhc3NpZ25tZW50XFxcXDIwMjQtMDhcXFxcbXktdnVlLWFwcFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFx1NEY1Q1x1NEUxQVx1NTQ4Q1x1N0VDM1x1NEU2MFxcXFxhc3NpZ25tZW50XFxcXDIwMjQtMDhcXFxcbXktdnVlLWFwcFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcc3ZnLWljb24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6LyVFNCVCRCU5QyVFNCVCOCU5QSVFNSU5MiU4QyVFNyVCQiU4MyVFNCVCOSVBMC9hc3NpZ25tZW50LzIwMjQtMDgvbXktdnVlLWFwcC92aXRlL3BsdWdpbnMvc3ZnLWljb24udHNcIjtpbXBvcnQge1xyXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW5cclxufSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG4vLyBcdTgxRUFcdTVCOUFcdTRFNDlzdmdcdTU2RkVcdTY4MDdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3ZnSWNvbihpc0J1aWxkOiBib29sZWFuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zL3N2ZycpXSwgLy8gXHU2MzA3XHU1QjlBXHU5NzAwXHU4OTgxXHU3RjEzXHU1QjU4XHU3Njg0XHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XHJcbiAgICAgICAgc3ltYm9sSWQ6ICdpY29uLVtuYW1lXScsIC8vIFx1NjMwN1x1NUI5QXN5bWJvbElkXHU2ODNDXHU1RjBGXHJcbiAgICAgICAgc3Znb09wdGlvbnM6IGlzQnVpbGRcclxuICAgIH0pXHJcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXFx1NEY1Q1x1NEUxQVx1NTQ4Q1x1N0VDM1x1NEU2MFxcXFxhc3NpZ25tZW50XFxcXDIwMjQtMDhcXFxcbXktdnVlLWFwcFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFx1NEY1Q1x1NEUxQVx1NTQ4Q1x1N0VDM1x1NEU2MFxcXFxhc3NpZ25tZW50XFxcXDIwMjQtMDhcXFxcbXktdnVlLWFwcFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcY29tcHJlc3Npb24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6LyVFNCVCRCU5QyVFNCVCOCU5QSVFNSU5MiU4QyVFNyVCQiU4MyVFNCVCOSVBMC9hc3NpZ25tZW50LzIwMjQtMDgvbXktdnVlLWFwcC92aXRlL3BsdWdpbnMvY29tcHJlc3Npb24udHNcIjtpbXBvcnQgY29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nXHJcblxyXG4vLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTUzOEJcdTdGMjlcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29tcHJlc3Npb24oKSB7XHJcbiAgICByZXR1cm4gY29tcHJlc3Npb24oe1xyXG4gICAgXHR0aHJlc2hvbGQ6IDEwMjQwMDAsICAgICAvLyBcdTVCRjlcdTU5MjdcdTRFOEUgMU0gXHU3Njg0XHU2NTg3XHU0RUY2XHU4RkRCXHU4ODRDXHU1MzhCXHU3RjI5XHVGRjBDXHU1MzU1XHU0RjREXHU2NjJGXHU1QjU3XHU4MjgyXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBIDBcclxuICAgIFx0Ly8gZGVsZXRlT3JpZ2luRmlsZTogZmFsc2UsIC8vIFx1NTM4Qlx1N0YyOVx1NTQwRVx1NjYyRlx1NTQyNlx1NTIyMFx1OTY2NFx1NTM5Rlx1NjU4N1x1NEVGNlx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQSBmYWxzZVxyXG4gICAgXHQvLyB2ZXJib3NlOiB0cnVlLCAvL1x1NjYyRlx1NTQyNlx1NTcyOFx1NjNBN1x1NTIzNlx1NTNGMFx1OEY5M1x1NTFGQVx1NTM4Qlx1N0YyOVx1N0VEM1x1Njc5Q1x1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQSB0cnVlXHJcbiAgICBcdC8vIGRpc2FibGU6IGZhbHNlLCAvL1x1NjYyRlx1NTQyNlx1Nzk4MVx1NzUyOFx1NTM4Qlx1N0YyOVx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQSBmYWxzZVxyXG4gICAgXHQvLyBhbGdvcml0aG06ICdnemlwJywgLy8gXHU1MzhCXHU3RjI5XHU3Qjk3XHU2Q0Q1XHVGRjBDXHU5RUQ4XHU4QkE0XHU2NjJGIGd6aXBcdTMwMDJcdTUzRUZcdTkwMDkgWyBcdTIwMThnemlwXHUyMDE5ICwgXHUyMDE4YnJvdGxpQ29tcHJlc3NcdTIwMTkgLFx1MjAxOGRlZmxhdGVcdTIwMTkgLCBcdTIwMThkZWZsYXRlUmF3XHUyMDE5XVxyXG4gICAgXHQvLyBleHQ6ICcuZ3onIC8vIFx1NzUxRlx1NjIxMFx1NzY4NFx1NTM4Qlx1N0YyOVx1NTMwNVx1NTQwRVx1N0YwMFxyXG4gICAgfSlcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXFx1NEY1Q1x1NEUxQVx1NTQ4Q1x1N0VDM1x1NEU2MFxcXFxhc3NpZ25tZW50XFxcXDIwMjQtMDhcXFxcbXktdnVlLWFwcFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFx1NEY1Q1x1NEUxQVx1NTQ4Q1x1N0VDM1x1NEU2MFxcXFxhc3NpZ25tZW50XFxcXDIwMjQtMDhcXFxcbXktdnVlLWFwcFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcZXNsaW50LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi8lRTQlQkQlOUMlRTQlQjglOUElRTUlOTIlOEMlRTclQkIlODMlRTQlQjklQTAvYXNzaWdubWVudC8yMDI0LTA4L215LXZ1ZS1hcHAvdml0ZS9wbHVnaW5zL2VzbGludC50c1wiO2ltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50J1xyXG5cclxuLy9lc2xpbnRcdTY4MjFcdTlBOENcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRXNsaW50KCkge1xyXG4gICAgcmV0dXJuIGVzbGludFBsdWdpbih7XHJcblx0XHRpbmNsdWRlOiBbJ3NyYy8qKi8qLmpzJywgJ3NyYy8qKi8qLnRzJywgJ3NyYy8qKi8qLnZ1ZScsICdzcmMvKi5qcycsICdzcmMvKi50cycsICdzcmMvKi52dWUnXSBcclxuXHR9KVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcXHU0RjVDXHU0RTFBXHU1NDhDXHU3RUMzXHU0RTYwXFxcXGFzc2lnbm1lbnRcXFxcMjAyNC0wOFxcXFxteS12dWUtYXBwXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcXHU0RjVDXHU0RTFBXHU1NDhDXHU3RUMzXHU0RTYwXFxcXGFzc2lnbm1lbnRcXFxcMjAyNC0wOFxcXFxteS12dWUtYXBwXFxcXHZpdGVcXFxccGx1Z2luc1xcXFxpbnNwZWN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi8lRTQlQkQlOUMlRTQlQjglOUElRTUlOTIlOEMlRTclQkIlODMlRTQlQjklQTAvYXNzaWdubWVudC8yMDI0LTA4L215LXZ1ZS1hcHAvdml0ZS9wbHVnaW5zL2luc3BlY3QudHNcIjtpbXBvcnQgaW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xyXG5cclxuLy9kb21cdTUxNDNcdTdEMjBcdTVCOUFcdTRGNERcdTVFNzZcdThDMDNcdTc1MjhcdThENzdpZGVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSW5zcGVjdCgpIHtcclxuICAgIHJldHVybiBpbnNwZWN0KClcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXFx1NEY1Q1x1NEUxQVx1NTQ4Q1x1N0VDM1x1NEU2MFxcXFxhc3NpZ25tZW50XFxcXDIwMjQtMDhcXFxcbXktdnVlLWFwcFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFx1NEY1Q1x1NEUxQVx1NTQ4Q1x1N0VDM1x1NEU2MFxcXFxhc3NpZ25tZW50XFxcXDIwMjQtMDhcXFxcbXktdnVlLWFwcFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcdmlzdWFsaXplci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovJUU0JUJEJTlDJUU0JUI4JTlBJUU1JTkyJThDJUU3JUJCJTgzJUU0JUI5JUEwL2Fzc2lnbm1lbnQvMjAyNC0wOC9teS12dWUtYXBwL3ZpdGUvcGx1Z2lucy92aXN1YWxpemVyLnRzXCI7aW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcidcclxuXHJcbi8vXHU2MjUzXHU1MzA1XHU1MjA2XHU2NzkwXHU1REU1XHU1MTc3XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVZpc3VhbGl6ZXIoKSB7XHJcblx0cmV0dXJuIHZpc3VhbGl6ZXIoe1xyXG5cdFx0b3BlbjogdHJ1ZSAvLyBcdTYyNTNcdTUzMDVcdTU0MEVcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTUyMDZcdTY3OTBcdTYyQTVcdTU0NEFcclxuXHR9KSBhcyBhbnlcclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1YsU0FBUyxjQUFjLGVBQWU7QUFDNVgsT0FBT0EsV0FBVTs7O0FDRG9XLE9BQU8sU0FBUzs7O0FDQUosT0FBTyxnQkFBZ0I7QUFDeFosT0FBTyxnQkFBZ0I7QUFDdkI7QUFBQSxFQUNDO0FBQUEsT0FDTTtBQUdQLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUVYLFNBQVIsbUJBQW9DO0FBQzFDLFFBQU0sbUJBQW1CLFdBQVc7QUFBQSxJQUNuQyxTQUFTLENBQUMsT0FBTyxjQUFjLE9BQU87QUFBQTtBQUFBLElBQ3RDLFdBQVc7QUFBQSxNQUNWLG9CQUFvQjtBQUFBO0FBQUEsTUFDcEIsY0FBYztBQUFBO0FBQUEsUUFDYixRQUFRO0FBQUEsTUFDVCxDQUFDO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxLQUFLO0FBQUEsSUFDTCxVQUFVO0FBQUEsTUFDVCxTQUFTO0FBQUEsSUFDVjtBQUFBLEVBQ0QsQ0FBQztBQUVELFFBQU0sbUJBQW1CLFdBQVc7QUFBQTtBQUFBLElBRW5DLFdBQVc7QUFBQSxNQUNWLG9CQUFvQjtBQUFBO0FBQUEsTUFDcEIsY0FBYztBQUFBO0FBQUEsUUFDYixvQkFBb0I7QUFBQSxVQUNuQjtBQUFBLFFBQ0Q7QUFBQTtBQUFBLE1BQ0QsQ0FBQztBQUFBLElBQ0Y7QUFBQTtBQUFBLEVBRUQsQ0FBQztBQUVELFFBQU0sY0FBYyxNQUFNO0FBQUEsSUFDekIsYUFBYTtBQUFBO0FBQUEsRUFDZCxDQUFDO0FBRUQsU0FBTyxDQUFDLGtCQUFrQixrQkFBa0IsV0FBVztBQUN4RDs7O0FDNUMyWDtBQUFBLEVBQ3ZYO0FBQUEsT0FDRztBQUNQLE9BQU8sVUFBVTtBQUdGLFNBQVIsY0FBK0IsU0FBa0I7QUFDcEQsU0FBTyxxQkFBcUI7QUFBQSxJQUN4QixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLHNCQUFzQixDQUFDO0FBQUE7QUFBQSxJQUM5RCxVQUFVO0FBQUE7QUFBQSxJQUNWLGFBQWE7QUFBQSxFQUNqQixDQUFDO0FBQ0w7OztBQ1ppWSxPQUFPLGlCQUFpQjtBQUcxWSxTQUFSLG9CQUFxQztBQUN4QyxTQUFPLFlBQVk7QUFBQSxJQUNsQixXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNWixDQUFDO0FBQ0w7OztBQ1p1WCxPQUFPLGtCQUFrQjtBQUdqWSxTQUFSLGVBQWdDO0FBQ25DLFNBQU8sYUFBYTtBQUFBLElBQ3RCLFNBQVMsQ0FBQyxlQUFlLGVBQWUsZ0JBQWdCLFlBQVksWUFBWSxXQUFXO0FBQUEsRUFDNUYsQ0FBQztBQUNGOzs7QUNQeVgsT0FBTyxhQUFhO0FBRzlYLFNBQVIsZ0JBQWlDO0FBQ3BDLFNBQU8sUUFBUTtBQUNuQjs7O0FDTCtYLFNBQVMsa0JBQWtCO0FBRzNZLFNBQVIsbUJBQW9DO0FBQzFDLFNBQU8sV0FBVztBQUFBLElBQ2pCLE1BQU07QUFBQTtBQUFBLEVBQ1AsQ0FBQztBQUNGOzs7QU5HZSxTQUFSLGtCQUFtQyxVQUFVLE9BQU87QUFDMUQsUUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDO0FBQzFCLGFBQVcsWUFBWSxLQUFLLGFBQWEsQ0FBQztBQUcxQyxjQUFZLEtBQUssY0FBYyxPQUFPLENBQUM7QUFFdkMsY0FBWSxLQUFLLEdBQUcsaUJBQWlCLENBQUM7QUFFdEMsYUFBVyxZQUFZLEtBQUssa0JBQWtCLENBQUM7QUFDL0MsYUFBVyxZQUFZLEtBQUssY0FBYyxDQUFDO0FBRTNDLGNBQVksS0FBSyxpQkFBaUIsQ0FBUTtBQUUxQyxTQUFPO0FBQ1I7OztBRHpCQSxJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLE1BQU0sUUFBUSxNQUFNO0FBSS9DLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFDdkMsU0FBTztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBO0FBQUEsTUFFTCxPQUFPO0FBQUEsUUFDSCxLQUFLQyxNQUFLLFFBQVEsa0NBQVcsSUFBSTtBQUFBLFFBQ2pDLEtBQUtBLE1BQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUE7QUFBQSxNQUN4QztBQUFBO0FBQUEsTUFFQSxZQUFZLENBQUMsUUFBUSxPQUFPLE9BQU8sUUFBUSxRQUFRLFNBQVMsTUFBTTtBQUFBLElBQ3RFO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxRQUFRO0FBQUE7QUFBQSxJQUNaO0FBQUEsSUFDQSxTQUFTLGtCQUFrQixZQUFZLE9BQU87QUFBQTtBQUFBLElBRTlDLFFBQVE7QUFBQSxNQUNKLE1BQU07QUFBQTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUEsTUFDTixNQUFNO0FBQUE7QUFBQSxNQUNOLE1BQU07QUFBQTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0gsUUFBUTtBQUFBLFVBQ0osUUFBUTtBQUFBO0FBQUEsVUFDUixjQUFjO0FBQUE7QUFBQSxVQUNkLElBQUk7QUFBQTtBQUFBLFVBQ0osUUFBUTtBQUFBO0FBQUEsVUFDUixhQUFhO0FBQUE7QUFBQSxZQUNULFNBQVM7QUFBQSxVQUNiO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiLCAicGF0aCJdCn0K
