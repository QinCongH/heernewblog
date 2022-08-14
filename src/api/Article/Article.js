//请求的方法
import base from '../base' //引入配置文件
// import service from '../axios' //使用封装好的axios拦截器
import axios from 'axios';
/*
    获取文章数据
*/
export const getArticle = () => {
    return axios.get(base.queryArticle);
}
/*
添加文章
*/
export const addArticle = (data) => {
    return axios.post(base.addArticle, {
        data
    })
}
/*
查询文章（分页）
*/
export const queryPagArticle = (params) => {
    return axios.get(base.queryPagArticle, {
        params
    })
}