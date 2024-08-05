import compression from 'vite-plugin-compression'

// 静态资源压缩
export default function createCompression() {
    return compression({
    	threshold: 1024000,     // 对大于 1M 的文件进行压缩，单位是字节，默认为 0
    	// deleteOriginFile: false, // 压缩后是否删除原文件，默认为 false
    	// verbose: true, //是否在控制台输出压缩结果，默认为 true
    	// disable: false, //是否禁用压缩，默认为 false
    	// algorithm: 'gzip', // 压缩算法，默认是 gzip。可选 [ ‘gzip’ , ‘brotliCompress’ ,‘deflate’ , ‘deflateRaw’]
    	// ext: '.gz' // 生成的压缩包后缀
    })
}
