import axios from 'axios'
function request(url,options={}){
    let defaultHeaders = {
        'Authorization':sessionStorage.getItem('sessionid'),
        'Content-Type':'application/json'
    };
    options.headers = options.headers || defaultHeaders;
    return axios(url,options).then(res=>{
        if(res.data.code === 1){
            return res.data;
        }else{
            alert(res.data.msg);
        }
    }).catch(err=>{
        if(err){
            alert(err);
        }
    })
}

export default request;