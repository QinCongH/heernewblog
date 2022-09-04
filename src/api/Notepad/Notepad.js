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

/*
获取笔记本内容
*/
export const queryNotePad = () => {
    return axios.get(base.queryNotePad);
}
/*
根据id查询笔记本内容
*/

export const queryIdNotePad = (params) => {
    return axios.get(base.queryIdNotePad,{
        params
    });
}
/*
更新头像
*/
export const updataNotepadAvatar = (params) => {
    return axios.get(base.updataNotepadAvatar,{
        params
    });
}
/*
添加记事本 addNotepad
*/
export const addNotepad = (data) => {
    return axios.post(base.addNotepad, {
        data
    })
}
/*
更新记事本
*/
export const editNotepad = (data) => {
    return axios.post(base.editNotepad, {
        data
    })
}
/*
删除记事本
*/
export const deleteNotepad = (params) => {
    return axios.get(base.deleteNotepad, {
       params
    })
}