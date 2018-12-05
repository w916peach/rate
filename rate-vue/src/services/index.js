import request from '../util/request'

// 请求总分的数据

export function getAllScoreApi(user){
    return request('/getAllScore',{params:{user}});
}

// 请求明细的数据

export function getDetailScoreApi(user){
    return request('/getDetailScore',{params:{user}});
}

