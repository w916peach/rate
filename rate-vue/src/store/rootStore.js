export default {
    state:{
        title:'hello'
    },
    getters:{ // state的派生
        showTitle(state){
            return state.title + ' world';
        }
    },
    mutations:{ // 修改数据源（state)的唯一方式 必须是纯函数（参数不变，返回值永远不变）
        setTitle(state,payload){
            state.title = payload.title;
        }
    },
    actions:{ // 处理副作用
        getTitle(context,payload){  // context是一个和store拥有同样属性和方法的对象
            setTimeout(()=>{

                context.commit('setTitle',{title:'789'});
            },1000);
        }
    }
}