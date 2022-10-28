const mysql = require('mysql')
//createPool替代createConnection
const connection = mysql.createPool({
    host: 'localhost', //本地
    user: 'root',
    password: 'root',
    database: 'heerblog'
})
//使用createPool时应当使用getConnection
connection.getConnection((err) => {
    if (err) return
    console.log('数据库连接成功')
})
module.exports = connection //暴露出去