//请求的方法
import base from '../base' //引入配置文件
import axios from 'axios';
/*
    获取个人信息数据
*/
export const queryDisposition = (
    params) => {
    return axios.get(base.queryDisposition, {
        params
    });
}