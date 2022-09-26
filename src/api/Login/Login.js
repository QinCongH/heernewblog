//请求的方法
import base from '../base' //引入配置文件
// import service from '../axios' //使用封装好的axios拦截器
import axios from 'axios';
/*
登录
*/
export const login = ({
    email,
    password
}) => {
    return axios.post(base.login, {
        email,
        password
    })
}