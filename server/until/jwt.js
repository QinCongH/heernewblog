// 引入模块依赖
const jwt = require('jsonwebtoken');
let key = "_Q.Q__heerblog_OVO__"
// let expir = 60 * 30 //30min(token过期的时间)
//生成token
const generateToken = function ({
    user,
    expir
}) {
    let token = jwt.sign({
        user
    }, key, {
        expiresIn: expir
    });
    return token;
}
// 校验token(错误会抛出异常)
const verifyToken = function (token) {
    try {
        let tokenKey = jwt.verify(token, key)
        return {
            code: 200,
            msg: '校验成功',
            tokenKey,
        }
    } catch {
        return {
            code: 100,
            msg: '校验失败'
        }
    }
}
module.exports = {
    verifyToken,
    generateToken
};