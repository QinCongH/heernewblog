const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost', //本地
        user: 'root',
        password: 'root',
        database: 'heerblog'
    })
    connection.connect((err) => {
        if (err) return
        console.log('数据库连接成功')
    })
module.exports = connection //暴露出去