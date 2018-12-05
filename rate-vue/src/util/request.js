import axios from 'axios'
function request(url,options={}){
    return axios(url,options).then(res=>res.data).catch(err=>{
        if(err){
            console.log(err);
        }
    })
}

export default request;