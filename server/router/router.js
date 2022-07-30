const express = require('express')
const router = express.Router() //创建router
const {
    HomeDataUrl
} = require('./base')
const {
    getHomeData
} = require('./HomeData/HomeData')
router.get(HomeDataUrl.getHome, getHomeData)
module.exports = router