/*
连接数据库
*/
const connection = require('../../db/connection')
const {
    processID
} = require('../../until/processId')
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

/*
添加记事本
addNotepad
*/
const addNotepad = (req, res) => {
    // 1.得到数据
    if(!req.body.hasOwnProperty('data')){
        res.send({
            msg: '请检查字段'
        })
        return false
    }
    let {
        addNotepadList
    } = req.body.data
    const fieldCheck = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let el = arr[i];
            if (el === '' || el == null) {
                res.send({
                    msg: `请检查${el}字段!!`
                })
                return false
            }
        }
    }
    if (Object.keys(addNotepadList).length) {
        let arr = [addNotepadList.name, addNotepadList.head_portrait, addNotepadList.detailed]
        fieldCheck(arr) //检查字段
        let sortid = processID()
        let increaseSql = `INSERT INTO heer_notepad (id,sortid,name,head_portrait,detailed) VALUES (0,?,?,?,?)`
        let addSqlParams = [sortid,addNotepadList.name, addNotepadList.head_portrait, addNotepadList.detailed]
        connection.query(increaseSql, addSqlParams, (err, results, fields) => {
            if (err) {
                console.error(err)
                res.send({
                    msg: 'err'
                })
            }
            let sendData = {}
            sendData.data = results
            sendData.msg = 'ok'
            res.send(sendData)
        })
    } else {
        res.send({
            msg: '请检查字段'
        })
    }
}
module.exports = {
    queryNotePadeName,
    queryNotePad,
    queryIdNotePad,
    updataNotepadAvatar,
    addNotepad
}