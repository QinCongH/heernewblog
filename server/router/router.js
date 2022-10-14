const express = require('express')
const router = express.Router() //创建router
const { //路径
    Article,
    Upload,
    Notepad,
    Login,
    Disposition
} = require('./base')
const {
    login,
    register,
    checkToken
} = require('./Login/Login')
const { //方法
    getArticle,
    addArticle,
    queryPagArticle,
    queryIdArticle,
    queryNewArticles,
    editArticle,
    deleteArticle,
    querySortidArticle,
    queryTimeArticle
} = require('./Articel/Article')
const {
    uploadPicture,
    deleteFile,
    deleteAllFile
} = require('./Upload/Upload')
const {
    queryNotePadeName,
    queryNotePad,
    queryIdNotePad,
    updataNotepadAvatar,
    addNotepad,
    editNotepad,
    deleteNotepad
} = require('./Notepad/Notepad')
const {
    queryDisposition
} = require('./Disposition/Disposition')
/**
 文章管理
 */
//查询全部文章
router.get(Article.queryArticle, getArticle)
//添加文章
router.post(Article.addArticle, addArticle)
//分页查询文章
router.get(Article.queryPagArticle, queryPagArticle)
//根据id查询文章
router.get(Article.queryIdArticle, queryIdArticle)
//查询最新文章列表
router.get(Article.queryNewArticles, queryNewArticles)
//编辑文章
router.post(Article.editArticle, editArticle)
//删除文章
router.get(Article.deleteArticle, deleteArticle)
//根据sortid查询文章
router.get(Article.querySortidArticle, querySortidArticle)
//根据时间戳查询文章
router.get(Article.queryTimeArticle, queryTimeArticle)
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
//查询所有笔记本数据
router.get(Notepad.queryNotePad, queryNotePad)
//根据id查询笔记本数据
router.get(Notepad.queryIdNotePad, queryIdNotePad)
//更新笔记本头像
router.get(Notepad.updataNotepadAvatar, updataNotepadAvatar)
//添加记事本
router.post(Notepad.addNotepad, addNotepad)
//编辑记事本
router.post(Notepad.editNotepad, editNotepad)
//删除记事本
router.get(Notepad.deleteNotepad, deleteNotepad)
/*
登录
*/
router.post(Login.login, login)
router.post(Login.register, register)
router.get(Login.checkToken, checkToken)
/*
配置个人信息
*/
router.get(Disposition.queryDisposition, queryDisposition)
module.exports = router