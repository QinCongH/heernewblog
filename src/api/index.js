import {
    getArticle,
    addArticle,
    queryPagArticle,
    queryIdArticle,
    queryNewArticles,
    editArticle,
    deleteArticle,
    querySortidArticle,
    queryTimeArticle
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
    updataNotepadAvatar,
    addNotepad,
    editNotepad,
    deleteNotepad
} from './Notepad/Notepad'
import {
    login,
    checkToken
} from './Login/Login'
import {
    queryDisposition
} from './Disposition/Disposition'
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
    queryTimeArticle,
    // ----------获取记事本数据-------------------
    queryNotePadeName,
    queryNotePad,
    queryIdNotePad,
    updataNotepadAvatar,
    addNotepad,
    editNotepad,
    deleteNotepad,
    // ----------上传-------------------------
    uploadFiles,
    deleteAllFile,
    deleteFile,
    //--------登录--------
    login,
    checkToken,
    //------个人配置-------
    queryDisposition
}
export default api