const express = require('express')

const router = express.Router() //创建router
const { //路径
    Article,
    Upload,
    Notepad
} = require('./base')
const { //方法
    getArticle,
    addArticle,
    queryPagArticle
} = require('./Articel/Article')
const {
    uploadPicture,
    deleteFile,
    deleteAllFile
} = require('./Upload/Upload')
const {
    queryNotePadeName
} = require('./Notepad/Notepad')
/**
 文章管理
 */
//查询全部文章
router.get(Article.queryArticle, getArticle)
//添加文章
router.post(Article.addArticle, addArticle)
//分页查询文章
router.get(Article.queryPagArticle,queryPagArticle)
/*
上传
*/
//单个文件上传
router.post(Upload.uploadPicture, uploadPicture)
//删除文件
router.get(Upload.deleteFile, deleteFile)
router.post(Upload.deleteAllFile, deleteAllFile)

/*
记事本
*/
//查询记事本名称列表
router.get(Notepad.queryNotePadeName, queryNotePadeName)
module.exports = router