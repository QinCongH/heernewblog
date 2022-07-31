const express = require('express')
const router = express.Router() //创建router
const { //路径
    Article
} = require('./base')
const { //方法
    getArticle
} = require('./Articel/Article')
/**
 文章管理
 */
router.get(Article.queryArticle, getArticle)
module.exports = router