import {
    getArticle,
    addArticle,
    queryPagArticle,
    queryIdArticle,
    queryNewArticles,
    editArticle
} from './Article/Article';
import {
    uploadFiles,
    deleteAllFile
} from './Upload/Upload';
import {
    queryNotePadeName
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
    // ----------获取记事本数据-------------------
    queryNotePadeName,
    // ----------上传-------------------------
    uploadFiles,
    deleteAllFile
}
export default api