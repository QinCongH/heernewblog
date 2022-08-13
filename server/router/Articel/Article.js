/*
连接数据库
*/
const connection = require('../../db/connection')
const {
    processID
} = require('../../until/processId')
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
添加文章
*/
const addArticle = async (req, res) => {

    // 1.得到数据
    let {
        addArticleList
    } = req.body.data
    console.log(req.body)
    if (Object.keys(addArticleList).length) {
        console.log(1)
        // 得到了数据
        //  insert into table set col1='val1',col2='val2',col3='val3';
        /*
        //接收的
        addtime: 1660050206115
        is_show: true
        is_top: false
        title: "实打实"
        sortid: " sdfdsfsdfsd发射点发生发射点发生"
        click_count: 0
        content: "↵撒打撒打撒"
        */
        let aid = processID()
        let author = "禾耳"
        let increaseSql = `INSERT INTO heer_article (id,addtime,is_show,is_top,title,sortid,click_count,content,aid,author) VALUES (0,?,?,?,?,?,?,?,?,?)`
        let addSqlParams = [addArticleList.addtime, Number(addArticleList.is_show), Number(addArticleList.is_top), addArticleList.title, addArticleList.sortid, addArticleList.click_count, addArticleList.content, aid, author]
        /*
        // let increaseSql = `insert into heer_article set 
        addtime=${addArticleList.addtime},
        is_show=${Number(addArticleList.is_show)},
        is_top=${Number(addArticleList.is_top)},
        title=${addArticleList.title},
        sortid=${addArticleList.sortid},
        click_count=${addArticleList.click_count},
        content=${addArticleList.content},
        aid=${aid},
        author=${author}`
        */
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
    }
    // 2.执行语句
    // 3.发送数据
}
module.exports = {
    getArticle,
    addArticle
}