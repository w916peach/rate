import {loginApi} from '../../services'

let state = {
    username:'',
    sessionid:'',
    loginStatus:0   // 0 未登录   1 登录中   2登录成功 3 登录失败
}

let getters = {
    
}
let mutations = {
    setUserInfo(state,{username,sessionid,loginStatus}){
        state.username = username || state.username;
        state.sessionid = sessionid || state.sessionid;
        state.loginStatus = loginStatus || state.loginStatus;
    }
}
let actions = {
    async login({commit},{username,userpwd}){
        let loginInfo = await loginApi(username,userpwd);
        if(loginInfo.code === 1){
            let {sessionid} = loginInfo;
            let loginStatus = 1;
            // 登录成功，应该存储用户信息
            sessionStorage.setItem('sessionid',sessionid);
            commit('setUserInfo',{username,sessionid,loginStatus});
        }
    }
}

export default {
    namespaced:true,
    state,getters,mutations,actions
}