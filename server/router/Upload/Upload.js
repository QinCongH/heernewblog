const fs = require('fs');
const path = require('path')
/*
1.上传单个文件
*/
const uploadPicture = (req, res, next) => {
    //接收值：req.files,req.files
    //线上的也就是服务器中的图片的绝对地址
    res.send({
        msg: '上传成功',
        data: req.files
    })
}
//2.删除单个文件
const deleteFile = (req, res) => {
    // 1.接收文件名
    let {
        fileName
    } = req.query
    //执行删除  ${path.resolve('./')} 当前目录
    fs.unlink(`${path.resolve('./')}/public/image/${fileName}`, function (error) {
        if (error) {
            res.send({
                msg: '查询不到该文件，删除失败',
                error
            })
            return false;
        }
        res.send({
            msg: '文件删除成功'
        })
    })
}
//3.删除多个文件
/*
eval("(" +req.body.data + ")") 字符串转换为对象
${path.resolve('./')}       获取当前路径
*/
const deleteAllFile = (req, res) => {
    let {
        deleteList
    } = req.body.data//转换为对象
    // eval("(" +req.body.data.data + ")")  
    for (let index = 0; index < deleteList.length; index++) {
        fs.unlink(`${path.resolve('./')}/public/image/${deleteList[index]}`, function (error) {
            if (error) {
                res.send({
                    msg: '查询不到该文件，删除失败',
                    error
                })
            }
        })
    }
    res.send({
        msg: '文件删除成功'
    })
}
module.exports = {
    uploadPicture,
    deleteFile,
    deleteAllFile
}