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
    /*
        上传
    */
    uploadPicture: '/api/uploadPicture',
    deleteAllFile: '/api/deleteAllFile',

    /* 记事本*/
    queryNotePadeName: '/api/queryNotePadeName',
    queryNotePad:'/api/queryNotePad'
}
export default base