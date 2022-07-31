//请求的方法
import base from '../base' //引入配置文件
import axios from 'axios' //引入axios
/*
    以下封装的函数一定要有return值！！

*/
/*
    获取文章数据
*/
const Articel = {
    getArticle() {
        return axios.get(base.queryArticle);
    }
}
//使用类
// class Articel {
//  static  getArticle() {
//         return axios.get(base.queryArticle);
//     }
// }
export default Articel