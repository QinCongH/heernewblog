//请求的方法
import base from '../base' //引入配置文件
// import service from '../axios' //使用封装好的axios拦截器
import axios from 'axios';
/*
    获取笔记本名称list
*/
export const queryNotePadeName = () => {
    return axios.get(base.queryNotePadeName);
}