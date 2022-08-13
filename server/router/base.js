/*文章*/
const Article = {
    queryArticle: '/queryArticle',
    addArticle:'/addArticle'
}
/*上传*/
const Upload = {
    uploadPicture: '/uploadPicture',
    deleteFile: '/deleteFile',
    deleteAllFile: '/deleteAllFile'
}
/*记事本*/
const Notepad = {
    queryNotePadeName: '/queryNotePadeName' //获取笔记本名称list
}
module.exports = {
    Article,
    Upload,
    Notepad
}