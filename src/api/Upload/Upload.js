//请求的方法
import base from '../base' //引入配置文件
import axios from 'axios';
/*
   上传文件
*/
export const uploadFiles = (data) => {
    return axios.post(base.uploadPicture, {
        data
    }, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}
/*
删除未用到的图片
 */
export const deleteAllFile = (data) => {
    return axios.post(base.deleteAllFile, {
        data
    })
}