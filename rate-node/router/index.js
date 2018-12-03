
const users = require('./users');
const toolpage = require('./toolpage');
module.exports = app=>{
    // 定义用户相关的路由；
    app.use('/users',users);
    // 定义辅助工具页面的路由
    app.use('/toolpage',toolpage);
}