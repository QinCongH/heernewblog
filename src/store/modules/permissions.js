/*
首页状态
*/
const permissions = {
    namespaced: true, //开启命名空间
    actions: {

    },
    mutations: {

    },
    state: {
        token:localStorage.getItem('token')
    }
}

export default permissions