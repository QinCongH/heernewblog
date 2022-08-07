import {
    getArticle
} from './Article/Article';
import {
    uploadFiles
} from './Upload/Upload';
import {
    queryNotePadeName
} from './Notepad/Notepad'
import interceptor from './interceptor' //拦截器
interceptor()
const api = {
    // ----------获取文章数据------------
    getArticle,
    uploadFiles,
    // ----------获取记事本数据-------------------
    queryNotePadeName
}
export default api