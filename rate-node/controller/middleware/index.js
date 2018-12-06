const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const checkLogin = require('../checkLogin');
const cookieParser = require('cookie-parser');
module.exports = app=>{
    // 处理传递的数据
    app.use(bodyParser());
    app.use(bodyParser.urlencoded({extended:false}));
    // 处理cookie数据
    app.use(cookieParser());
    // 设置静态资源目录
    app.use(express.static(path.join(__dirname,'../../public')));
    //设置跨域资源共享
    app.use((req,res,next)=>{
        res.set('Access-Control-Allow-Origin','*');
        res.set('Access-Control-Allow-Headers','*');
        next();
    })
    // 验证用户是否登录成功
    app.use(checkLogin);
    // 验证用户的权限
    
    // 设置一个带验证的静态资源目录
    app.use(express.static(path.join(__dirname,'../../autorized')));
}