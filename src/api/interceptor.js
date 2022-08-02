//配置请求拦截器和响应拦截器
import axios from "axios";
import base from "./base";
const interceptor = () => {
    axios.create({
        baseURL: base.host, // api base_url
        timeout: 6000 // 请求超时时间
    })
    /*1.添加请求拦截器*/
    axios.interceptors.request.use(config => {
        // 在发送请求前做什么
        console.log('发请求了')
        return config
    }, error => {
        // 对请求错误做些什么
        console.log('请求错误')
        return Promise.reject(error);
    });
    /*2.添加响应拦截器*/
    axios.interceptors.response.use(response => {
        // 对响应数据做处理
        console.log("响应数据", response)
        // ... ...
        return response;
    }, error => {
        // 对响应错误做处理      
        console.log("响应错误", error)
        return Promise.reject(error);
    });
}


export default interceptor; //暴露出去