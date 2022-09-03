import {
    getArticle,
    addArticle,
    queryPagArticle,
    queryIdArticle,
    queryNewArticles,
    editArticle,
    deleteArticle,
    querySortidArticle
} from './Article/Article';
import {
    uploadFiles,
    deleteFile,
    deleteAllFile
} from './Upload/Upload';
import {
    queryNotePadeName,
    queryNotePad,
    queryIdNotePad,
    updataNotepadAvatar
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
    querySortidArticle,
    // ----------获取记事本数据-------------------
    queryNotePadeName,
    queryNotePad,
    queryIdNotePad,
    updataNotepadAvatar,
    // ----------上传-------------------------
    uploadFiles,
    deleteAllFile,
    deleteFile
}
export default api