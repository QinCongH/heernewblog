/*
连接数据库
*/
const connection = require('../../db/connection')
const queryDisposition = async (req, res) => {
    let name = req.query.name
    //查询数据
    function queryData(name) {
        return new Promise((resolve, reject) => {
            let querySql = `select * from heer_disposition where name = '${name}'`
            connection.query(querySql, (err, results) => {
                if (results) {
                    resolve(results)
                } else {
                    reject(err)
                }
            })
        })
    }
    try {
        let queryDataRes = await queryData(name)
        if (queryDataRes) {
            res.statusCode = 200
            res.send(queryDataRes)
        }
    } catch (error) {
        res.statusCode = 500
        res.send({
            error,
            msg: '该用户不存在!'
        })
    }

}
module.exports = {
    queryDisposition
}