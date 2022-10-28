/*
连接数据库
*/
const bcryptjs = require('bcryptjs')
const connection = require('../../db/connection')
const jwt = require('../../until/jwt')
const {
    processID
} = require('../../until/processId')
const login = async (req, res) => {
    let {
        email,
        password,
    } = req.body
    //字段校验
    function formCharm(obj) {
        if (obj.type == "email") {
            let regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
            if (!regEmail.test(obj.val)) {
                regEmail.lastIndex = 0
                return 0
            } else {
                return 1
            }
        }
    }
    //根据邮箱得到数据库数据,判断是否注册
    function isRegister() {
        return new Promise((resolve, reject) => {
            let queryRegisterSql = `select * from heer_user where email = '${email}'`
            connection.query(queryRegisterSql, (err, results) => {
                if (results) {
                    resolve(results)
                } else {
                    reject(err)
                }
            })
        })
    }
    //对比
    function compareData() {
        return new Promise(async (resolve, reject) => {
            let isRegisterRes = await isRegister()
            let encryptionPwd = isRegisterRes[0].password
            let isPwd = bcryptjs.compareSync(password, encryptionPwd);
            if (isPwd) {
                resolve(1) //比对成功
            } else {
                resolve(0)
            }
        })
    }
    //生成token
    try {
        //1字段校验
        if (formCharm({
                type: 'email',
                val: email
            }) == 0) {
            res.statusCode = 500
            res.send('请检查email字段!')
            return false
        }
        //2根据邮箱得到数据，如果得到了进行密码比对，如果没有得到提醒未注册
        let isRegisterRes = await isRegister()
        if (!isRegisterRes.length) {
            res.statusCode = 500
            res.send({
                msg: '用户未注册!'
            })
            return false
        }
        //3密码，邮箱比对
        let compareDataRes = await compareData()
        console.log(compareDataRes)
        if (compareDataRes) {
            let token = jwt.generateToken({
                email,
                expir: 864000 //十天
            })
            res.statusCode = 200
            res.send({
                token,
                msg:'登录成功!',
                status:200
            })
        } else {
            res.statusCode = 500
            res.send({
                msg: '密码错误!'
            })
            return false
        }

    } catch (error) {
        res.statusCode = 500
        res.send(error)
        return false
    }
    // res.send('login')
    /*
        //思路
        1.得到前端的邮箱，密码
        2.字段校验
        3.根据邮箱得到数据，如果得到了进行密码比对，如果没有得到提醒未注册
        4.密码，邮箱比对
        //let isEqual = await bcrypt.compare('明文密码', '加密密码');
        5.生成token
        6.登录
    */
}
const register = async (req, res) => {
    let {
        email,
        password,
        username
    } = req.body
    //字段校验
    function formCharm(obj) {
        if (obj.type == "email") {
            let regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
            if (!regEmail.test(obj.val)) {
                regEmail.lastIndex = 0
                return 0
            } else {
                return 1
            }
        }
    }

    //查询是否已注册
    function isRegister() {
        return new Promise((resolve, reject) => {
            let queryRegisterSql = `select * from heer_user where email = '${email}'`
            connection.query(queryRegisterSql, (err, results) => {
                if (results) {
                    resolve(results)
                } else {
                    reject(err)
                }
            })
        })
    }
    //密码加密
    function passwordEncryption(password) {
        //生成salt的迭代次数
        const saltRounds = 10;
        //随机生成salt
        const salt = bcryptjs.genSaltSync(saltRounds);
        //获取hash值
        let hash = bcryptjs.hashSync(password, salt);
        return hash
    }
    //注册
    function toRegister() {
        return new Promise(async (resolve, reject) => {
            let increaseSql = `INSERT INTO heer_user (id,email,password,username,userid) VALUES (0,?,?,?,?)`
            let sendPwd = passwordEncryption(password)
            let userid = processID()
            let addSqlParams = [email, sendPwd, username, userid]
            connection.query(increaseSql, addSqlParams, (err, results, fields) => {
                if (results) {
                    resolve(results)
                } else {
                    reject(err)
                }
            })
        })
    }
    try {
        if (formCharm({
                type: 'email',
                val: email
            }) == 0) {
            res.statusCode = 500
            res.send('请检查email字段!')
            return false
        }
        let isRegisterRes = await isRegister()
        if (isRegisterRes.length) {
            res.statusCode = 500
            res.send('该用户已注册!')
            return false
        }
        let toRegisterRes = await toRegister()
        if (toRegisterRes) {
            res.statusCode = 200
            res.send(toRegisterRes)
            return false
        }
    } catch (error) {
        res.statusCode = 500
        res.send(error)
        return false
    }
    /*
        //思路
        1.得到前端的邮箱，密码，用户名
        2.字段校验
        3.查询是否已注册
        4.密码加密
        5.注册
    */
}
const checkToken=async (req,res)=>{
    let getToken = req.headers.authorization
    let checkTokenRes = jwt.verifyToken(getToken)
    if (checkTokenRes.code == 100) {
        res.statusCode = 401
        res.send({
            msg: '未登录！',
            success: false,
            statusCode:401
        })
        return false
    }
    res.statusCode =200
    res.send({
        msg: '已登录！',
        success: true,
        statusCode:200
    })
}
module.exports = {
    login,
    register,
    checkToken
}