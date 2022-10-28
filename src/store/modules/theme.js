/*
首页状态
*/
const theme = {
    namespaced: true, //开启命名空间
    actions: {
        setTheme(context, value) {
            context.commit('SETTHEME', value)
        },
        changeTheme(context, value) {
            context.commit('CHANGETHEME', value)
        },

    },
    mutations: {
        SETTHEME(state, value) {
            // const date = new Date();
            // let time = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}${
            //     date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
            //   }`;
            // if (parseInt(time) > 1800 || parseInt(time) < 600) {
            //     //到晚上了
            //     state.isDark = true
            // } else {
            //     state.isDark = false;
            // }
            console.log(state.isDark)
            localStorage.setItem("isDark", state.isDark);
        },
        CHANGETHEME(state,value){
            localStorage.setItem("isDark", !value);
            state.isDark=!value
        }
    },
    state: {
        isDark: localStorage.getItem("isDark")=='true'?true:false
    }
}

export default theme