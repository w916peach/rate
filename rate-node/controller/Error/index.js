/*
 * @Author: tao 
 * @Date: 2018-11-29 13:23:29 
 * @Last Modified by: tao
 * @Last Modified time: 2018-11-29 13:27:13
 * @func 错误处理中间件
 */
module.exports = app=>{
    app.use((req,res,next)=>{
        res.send({msg:'服务端错误',code:0});
    });
}