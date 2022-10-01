/*
首页状态
*/
//引入api
import api from '../../api'
const permissions = {
    namespaced: true, //开启命名空间
    actions: { //得到数据
        getToken(context, value) {
            console.log('actions的token被调用了', context, value);
            context.commit('GETTOKEN', value)
        }
    },
    mutations: { //操作数据
        async GETTOKEN(state, value) {
            localStorage.setItem("token", value);
            let checkTokenRes = await api.checkToken()
            if (checkTokenRes.status == 200) {
                state.isShow = true
            }
        }
    },
    state: {
        token: localStorage.getItem('token'),
        isShow: false
    }
}

export default permissions