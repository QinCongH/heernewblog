// express创建
const express = require('express')
app = express()
app.use('/', (req, res) => {
    req.status = 200
    res.send("服务器搭建成功!")
})
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