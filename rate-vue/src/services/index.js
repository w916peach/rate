import request from '../util/request'

// 请求总分的数据

export function getAllScoreApi(user){
    return request('/getAllScore',{params:{user}});
}

// 请求明细的数据

export function getDetailScoreApi(user){
    return request('/getDetailScore',{params:{user}});
}


// 登录的接口

export function loginApi(username,userpwd){
    return request('http://localhost:3000/users/login',{
        method:'POST',
        data:{username,userpwd}
    })
}
