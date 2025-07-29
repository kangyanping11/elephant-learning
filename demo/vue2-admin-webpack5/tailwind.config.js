module.exports = {
    darkMode: false, // or 'media' or 'class' // 配置暗黑模式
    content: [
        './src/**/*.{vue,js,ts,jsx,tsx}',// 指定需要扫描的文件路径
        './public/index.html', // 包括公共 HTML 文件
    ],
    // important: true, // 确保 Tailwind CSS 的样式优先级高于其他样式
    // corePlugins: {
    //     preflight: false, // 禁用 Tailwind 的预设样式
    // },
    // 这里可以添加自定义的主题配置
    theme: {
        extend: {},
    },
    plugins: [],// 在这里可以添加 Tailwind CSS 插件
    variants: {
        extend: {}, // 在这里可以扩展 Tailwind CSS 的变体
    },   
}
