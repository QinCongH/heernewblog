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

/*
查询文章(id)
*/
export const queryIdArticle = (params) => {
    return axios.get(base.queryIdArticle, {
        params
    })
}
/*
最新文章 queryNewArticles
*/
export const queryNewArticles = (params) => {
    return axios.get(base.queryNewArticles, {
        params
    })
}
/*
编辑文章 editArticle
*/
export const editArticle = (data) => {
    return axios.post(base.editArticle, {
      data
    })
}
/*
删除文章 deleteArticle
*/
export const deleteArticle = (params) => {
    return axios.get(base.deleteArticle, {
        params
    })
}
/*
根据sortid查询文章
*/
export const querySortidArticle = (params) => {
    return axios.get(base.querySortidArticle, {
        params
    })
}
/*
分页查询时间线文章，
*/
export const  queryTimeArticle= (params) => {
    return axios.get(base.queryTimeArticle, {
        params
    })
} 
