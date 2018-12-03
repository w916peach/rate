const express = require('express');
const path = require('path');
const app = express(); // 生成一个express实例
const error = require('../controller/Error');
const router = require('../router');
const middleware = require('../controller/middleware');

app.set('views',path.join(__dirname,'../view'));
app.set('view engine','ejs');

// 挂载中间件
// 1.应用级的中间件
middleware(app);

// 2.路由级的中间件
router(app);


// 3.错误处理中间件
error(app);



let port = process.env.PORT*1 || 3000; // port是动态的
app.listen(port,()=>{
    console.log(`服务器已经成功的运行在http://${port}上`);
})