import {
    getArticle
}  from './Article/Article';
import {
    uploadFiles
}  from './Upload/Upload';
import interceptor from './interceptor' //拦截器
interceptor()
const api = {
    // ----------获取文章数据------------
    getArticle,
    uploadFiles
    
}
export default api