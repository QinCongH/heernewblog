//请求的方法
import base from '../base' //引入配置文件
// import service from '../axios' //使用封装好的axios拦截器
import axios from 'axios';

/*
    获取文章数据
*/
const Articel = {
    getArticle() {
        return axios.get(base.queryArticle);
    }
}
export default Articel