/*
 * @Author: tao 
 * @Date: 2018-11-30 09:10:58 
 * @Last Modified by: tao
 * @Last Modified time: 2018-11-30 13:25:19
 * @func:验证是否登录成功
 */
const sessions = require('../../sessions'); //服务端的sessions
module.exports = (req,res,next)=>{
    // 放过不需要验证的接口
    if(req.path === '/users/login' && req.method === 'POST'){
        next();
        return;
    }
    // 获取前台发过来的seessionid  从cookies中取，从请求头Authorization
    let sessionid = req.cookies.sessionid || req.headers.Authorization;

    if(!sessionid){
        res.send({msg:'没有权限信息',code:0});
        return;
    }
    // 验证sessionid
    let userSessionInfo = sessions.find(item=>item.sessionid === sessionid);

    if(!userSessionInfo){
        res.send({msg:'权限信息错误',code:0});
        return;
    }

    // 记录本次的登录信息

    req.session = userSessionInfo;

    next();

}