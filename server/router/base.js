/*文章*/
const Article = {
    queryArticle: '/queryArticle',
    addArticle:'/addArticle',
    queryPagArticle:'/queryPagArticle',
    queryIdArticle:'/queryIdArticle',
    queryNewArticles:'/queryNewArticles',
    editArticle:'/editArticle',
    deleteArticle:'/deleteArticle',
    querySortidArticle:'/querySortidArticle',
    queryTimeArticle:'/queryTimeArticle'
}
/*上传*/
const Upload = {
    uploadPicture: '/uploadPicture',
    deleteFile: '/deleteFile',
    deleteAllFile: '/deleteAllFile'
}
/*记事本*/
const Notepad = {
    queryNotePadeName: '/queryNotePadeName', //获取笔记本名称list
    queryNotePad:'/queryNotePad',
    queryIdNotePad:'/queryIdNotePad',
    updataNotepadAvatar:'/updataNotepadAvatar',
    addNotepad:'/addNotepad',
    editNotepad:'/editNotepad',
    deleteNotepad:'/deleteNotepad'
}
/*
处理登录
*/
const Login={
    login:'/login',
    register:'/register',
    checkToken:'/checkToken'
}
module.exports = {
    Article,
    Upload,
    Notepad,
    Login
}