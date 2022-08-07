/*
连接数据库
*/
const connection = require('../../db/connection')
/*获取文章数据*/
const getArticle = async (req, res) => {
    //建立查询语句
    let querySql = 'select * from heer_article' //user为表名
    //查询数据err, results（结果）, fields(数据库详情)
    connection.query(querySql, function (err, results, fields) {
        if (err) {
            let sendData = {}
            sendData.msg = err
            sendData.sendTime = new Date()
            res.send(sendData)
            return
        }
        let sendData = {}
        sendData.data = results
        sendData.msg = 'ok'
        sendData.sendTime = new Date()
        res.send(sendData)
    })
}
/*
分页查询数据
*/
module.exports = {
    getArticle
}