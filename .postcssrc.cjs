// module.exports = {
// plugins: {
// autoprefixer: {},
// "postcss-pxtorem": {
// rootValue: 192, // 根据设计图尺寸写，设计图是1920，就写192
// propList: ['*'], // 需要被转换的属性
// selectorBlackList: ['el'] // 不进行px转换的选择器，不转换element的标签样式，根据自己项目需求来定义
// }
// }
// }
module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'ff > 31',
                'ie >= 8',
                'last 10 versions', // 所有主流浏览器最近10版本用
            ],
            grid: true,
        },
        'postcss-pxtorem': {
            rootValue: 32,
            propList: ['*', '!border'], // 除 border 外所有px 转 rem
            selectorBlackList: ['.am-'], // 过滤掉.am-开头的class，不进行rem转换
        },
    },
}
