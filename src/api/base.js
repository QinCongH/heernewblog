const base = {
    /*基本地址*/
    host: 'localhost:3001/api',
    /*获取文章*/
    queryArticle: '/api/queryArticle',
    addArticle: '/api/addArticle',
    queryPagArticle: '/api/queryPagArticle',
    queryIdArticle: '/api/queryIdArticle',
    queryNewArticles:'/api/queryNewArticles',
    editArticle:'/api/editArticle',
    deleteArticle:'/api/deleteArticle',
    querySortidArticle:'/api/querySortidArticle',
    /*
        上传
    */
    uploadPicture: '/api/uploadPicture',
    deleteAllFile: '/api/deleteAllFile',
    deleteFile:'/api/deleteFile',
    /* 记事本*/
    queryNotePadeName: '/api/queryNotePadeName',
    queryNotePad:'/api/queryNotePad',
    queryIdNotePad:'/api/queryIdNotePad',
    updataNotepadAvatar:'/api/updataNotepadAvatar',
    addNotepad:'/api/addNotepad',
    editNotepad:'/api/editNotepad',
    deleteNotepad:'/api/deleteNotepad'
}
export default base