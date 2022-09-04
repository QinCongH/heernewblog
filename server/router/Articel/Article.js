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
    if (Object.keys(addArticleList).length) {
        let aid = processID()
        let author = "禾耳"
        let increaseSql = `INSERT INTO heer_article (id,addtime,is_show,is_top,title,sortid,click_count,content,aid,author) VALUES (0,?,?,?,?,?,?,?,?,?)`
        let addSqlParams = [addArticleList.addtime, Number(addArticleList.is_show), Number(addArticleList.is_top), addArticleList.title, addArticleList.sortid, addArticleList.click_count, addArticleList.content, aid, author]
        connection.query(increaseSql, addSqlParams, (err, results, fields) => {
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
    } else {
        res.send({
            msg: '请检查字段'
        })
    }
}
/*
分页查询文章
*/
const queryPagArticle = async (req, res) => {

    function getCountData() {
        return new Promise((resolve, reject) => {
            let queryCountSql = `select count(*) from heer_article where is_show = 1`
            connection.query(queryCountSql, (err, results) => {
                if (results) {
                    resolve(results)
                } else {
                    reject(err)
                }
            })
        })
    }

    function getPagData(startNum, endNum) {
        return new Promise((resolve, reject) => {
            // 选取第n~m条数据(n最小为1为第一条数据,m为一次查询几条)
            // SELECT * FROM table LIMIT n,m;
            // let qeryPagSql = `SELECT * FROM heer_article where is_show = 1 LIMIT ${startNum},${endNum}`
            //倒叙
            let qeryPagSql = `SELECT * FROM heer_article where is_show = 1 order by id desc LIMIT ${startNum},${endNum}`
            connection.query(qeryPagSql, (err, results) => {
                if (results) {
                    resolve(results)
                } else {
                    reject(err)
                }
            })
        })
    }
    try {
        //获取分页
        let page = req.query.page || 1 //接受用户端传递过来的当前页参数(页码)
        let pageSize = req.query.pageSize //每页显示的数据条数
        if (isNaN(page) || isNaN(pageSize)) {
            res.send({
                msg: 'page isNaN,pageSize isNaN'
            })
            return false
        }
        const countDataRes = await getCountData()
        let countRes = Object.values(countDataRes[0])
        let total = parseInt(countRes)
        let pageCount = Math.ceil(total / pageSize) //总页数=总数/每页显示的条数
        let start = (page - 1) * pageSize //页码对应的数据查询开始位置
        const pagDataRes = await getPagData(parseInt(start), parseInt(pageSize))
        // const pagDataRes = await getPagData(parseInt(total), parseInt(pageSize))
        res.send({
            params: pagDataRes,
            total,
            pageCount,
            msg: 'ok'
        })
    } catch (error) {
        res.send({
            error,
            msg: 'error'
        })
    }
}

/*
根据id查询文章
*/
const queryIdArticle = (req, res) => {
    let aid = req.query.aid
    if (!aid) {
        res.status(500)
        res.send('aid字段未定义！！')
        return
    }
    let querySql = `select * from heer_article where aid='${aid}'`
    connection.query(querySql, (err, results, fields) => {
        if (err) {
            res.status(500)
            res.send({
                message: '数据库未查询到',
                error: err
            })
            return
        }
        let resul = JSON.parse(JSON.stringify(results).slice(1).slice(0, -1))
        res.send({
            message: '查询成功！',
            params: resul
        })

    })
}
/*
查询最新文章列表
*/
const queryNewArticles = (req, res) => {
    let endNum = req.query.endNum
    if (!endNum) {
        res.send({
            msg: 'endNum is null'
        })
    }
    let querySql = `SELECT aid,title,addtime FROM  heer_article where is_show = 1 order by id desc LIMIT 0,${endNum} `
    connection.query(querySql, (err, results, fields) => {
        if (err) {
            res.send({
                msg: 'err',
                data: err

            })
            return
        }
        res.send({
            results,
            msg: 'ok'
        })
    })
}

/*
更新文章
*/
const editArticle = (req, res) => {
    // 1.得到数据
    let {
        editArticleList
    } = req.body.data
    if (Object.keys(editArticleList).length) {
        let updataSql = 'UPDATE heer_article SET is_show=?,is_top=?,title=?,sortid=?,content=? WHERE aid = ?'
        let updataSqlParams = [Number(editArticleList.is_show), Number(editArticleList.is_top), editArticleList.title, editArticleList.sortid, editArticleList.content, editArticleList.aid]
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
    } else {
        res.send({
            msg: '请检查字段'
        })
    }
}

/*
删除文章
*/
const deleteArticle = (req, res) => {
    let aid = req.query.aid
    if (!aid) {
        res.status(500)
        res.send('aid字段未定义！！')
        return
    }
    let deleteSql = `DELETE FROM heer_article where aid='${aid}'`
    connection.query(deleteSql, (err, results, fields) => {
        if (err) {
            res.status(500)
            res.send({
                message: '数据库未查询到该id',
                error: err
            })
            return
        }
        res.send({
            message: '删除成功！',
            params: results
        })

    })
}

/*
根据sortid查询文章 querySortidArticle
*/
const querySortidArticle = (req, res) => {
    let sortid = req.query.sortid
    if (!sortid) {
        res.status(500)
        res.send('sortid字段未定义！！')
        return
    }
    let querySql = `select * from heer_article where sortid='${sortid}'`
    connection.query(querySql, (err, results, fields) => {
        if (err) {
            res.status(500)
            res.send({
                message: '数据库未查询到',
                error: err
            })
            return
        }
        // let resul = JSON.parse(JSON.stringify(results).slice(1).slice(0, -1))
        res.send({
            message: '查询成功！',
            params: results
        })

    })
}
module.exports = {
    getArticle,
    addArticle,
    queryPagArticle,
    queryIdArticle,
    queryNewArticles,
    editArticle,
    deleteArticle,
    querySortidArticle
}