/*
连接数据库
*/
const connection = require('../../db/connection')
//获取首页数据
const getHomeData = async (req, res) => {
    //建立查询语句
    const querySql = 'select * from heer_article' //user为表名
    //查询数据
    connection.query(querySql, function (err, results, fields) {
        if (err) throw err
        console.log(results)
    })
    res.send('asaaaaaaaaaaaaaaaaaaaaaa')
}
module.exports = {
    getHomeData
}