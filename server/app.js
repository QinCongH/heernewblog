// express创建
const express = require('express')
app = express()
/*配置静态文件 */
const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
}
app.use(express.static('public', options))
/*
配置bodyParser模块，用于post请求
*/
const bodyParser = require('body-parser'); //引入bodyParser模块
app.use(bodyParser.json()); //解析 application/json
app.use(bodyParser.urlencoded({ //解析 application/x-www-form-urlencoded
    extended: false
}))
/**
 配置路由
 */
const router = require('./router/router')
app.use(router)

app.listen('3001', () => {
    console.log('localhost:3001')
})
//原生创建服务器
// const http = require('http')
// const app = http.createServer()
// app.on('request', (req, res) => {
//     res.end("ok")
// })
// app.listen(3001, () => {
//     console.log("服务器已经启动:localhost:3001")
// })