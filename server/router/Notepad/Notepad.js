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
/*
更新记事本头像
updataNotepadAvatar
*/
const updataNotepadAvatar = (req, res) => {
    //检查字段
    if (!req.query.hasOwnProperty('sortid')) {
        res.send({
            msg: '缺少sortid字段！！'
        })
        return false
    }
    if (!req.query.hasOwnProperty('head_portrait')) {
        res.send({
            msg: '缺少head_portrait字段！！'
        })
        return false
    }
    let head_portrait = req.query.head_portrait
    let sortid = req.query.sortid
    if (head_portrait === '' || head_portrait == null || sortid === '' || sortid == null) {
        res.send({
            msg: '检查字段值是否为空！！'
        })
        return false
    }
    //判断数据库是否存在id
    let queryIdSql = `Select * FROM heer_notepad WHERE sortid='${sortid}'`
    connection.query(queryIdSql, (err, results, fields) => {
        if (!results.length) {
            res.send({
                msg: '查询不到sortid!!！'
            })
        }
    })
    let updataSql = 'UPDATE heer_notepad SET head_portrait=? WHERE sortid = ?'
    let updataSqlParams = [head_portrait, sortid]
    connection.query(updataSql, updataSqlParams, (err, results, fields) => {
        if (err) {
            res.send({
                msg: 'err'
            })
        }
        let sendData = {}
        sendData.data = results
        sendData.msg = 'ok'
        res.send(sendData)
    })
}
module.exports = {
    queryNotePadeName,
    queryNotePad,
    queryIdNotePad,
    updataNotepadAvatar
}