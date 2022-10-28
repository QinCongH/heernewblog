// express创建
const express = require('express')
const fs = require('fs');
const path = require('path')
var serveStatic = require('serve-static') // 设置静态资源访问目录
app = express()
// //配置跨域
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    next()
})

// 1-1.设置上传路径
var multer = require('multer');
var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        if (String(file.mimetype).slice(0, 5) == "image") { //如果是图片
            cb(null, './public/image')
            return false
        }
        cb(null, './public')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
var fileFilter = function (req, file, cb) {
    cb(null, true); //这里设置为false则直接拒绝上传了，实际使用应为true
}
//1-2.添加配置文件到muler对象。
var upload = multer({
    storage: storage,
    fileFilter: fileFilter
});
app.use(upload.any()); //任意文件

/*
end
*/
app.use('/public/',express.static('./public/'))
/*
配置bodyParser模块，用于post请求
*/
const bodyParser = require('body-parser'); //引入bodyParser模块
app.use(bodyParser.json()); //解析 application/json
app.use(bodyParser.urlencoded({ //解析 application/x-www-form-urlencoded
    extended: false
}))
/*
连接数据库
*/
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