const express = require('express')

const router = express.Router() //创建router
const { //路径
    Article,
    Upload
} = require('./base')
const { //方法
    getArticle
} = require('./Articel/Article')
const {
    uploadPicture,
    deleteFile,
    deleteAllFile
} = require('./Upload/Upload')
/**
 文章管理
 */
router.get(Article.queryArticle, getArticle)
/*
上传
*/
//单个文件上传
router.post(Upload.uploadPicture, uploadPicture)
//删除文件
router.get(Upload.deleteFile, deleteFile)
router.post(Upload.deleteAllFile, deleteAllFile)
module.exports = router