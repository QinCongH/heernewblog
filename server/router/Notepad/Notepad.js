/*
连接数据库
*/
const connection = require('../../db/connection')
/*
分页查询数据
*/
const queryNotePadeName = (req, res) => {
    /*
    查询数据库
    */
    let querySql = "select name,sortid from heer_notepad"
    connection.query(querySql, function (err, results, fields) {
        if (err) {
            res.send({
                msg: '查询失败'
            })
            return
        }
        let sendData = {}
        sendData.data = results
        sendData.msg = 'ok'
        res.send(sendData)
    })
}

/*
查询记事本数据
*/
const queryNotePad = (req, res) => {
    let querySql = "select * from heer_notepad"
    connection.query(querySql, function (err, results, fields) {
        if (err) {
            res.send({
                msg: '查询失败'
            })
            return
        }
        let sendData = {}
        sendData.data = results
        sendData.msg = 'ok'
        res.send(sendData)
    })
}
/*
根据id查询笔记本
*/
const queryIdNotePad = (req, res) => {
    let sortid = req.query.sortid
    if (!sortid) {
        res.status(500)
        res.send('sortid字段未定义！！')
        return
    }
    let querySql = `select * from heer_notepad where sortid='${sortid}'`
    connection.query(querySql, function (err, results, fields) {
        if (err) {
            res.send({
                msg: '查询失败'
            })
            return
        }
        res.send(results)
    })
}
module.exports = {
    queryNotePadeName,
    queryNotePad,
    queryIdNotePad
}