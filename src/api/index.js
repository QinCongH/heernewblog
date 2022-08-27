import {
    getArticle,
    addArticle,
    queryPagArticle,
    queryIdArticle,
    queryNewArticles,
    editArticle,
    deleteArticle
} from './Article/Article';
import {
    uploadFiles,
    deleteAllFile
} from './Upload/Upload';
import {
    queryNotePadeName,
    queryNotePad
} from './Notepad/Notepad'
import interceptor from './interceptor' //拦截器
interceptor()
const api = {
    // ----------获取文章数据------------
    getArticle,
    addArticle,
    queryPagArticle,
    queryIdArticle,
    queryNewArticles,
    editArticle,
    deleteArticle,
    // ----------获取记事本数据-------------------
    queryNotePadeName,
    queryNotePad,
    // ----------上传-------------------------
    uploadFiles,
    deleteAllFile,
    
}
export default api