const context = require.context('.', true, /\.svg$/)
// 创建指定目录上下文，同时也是一个require

context.keys().forEach(context)