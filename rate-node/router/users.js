const express = require('express');
const router = express.Router();
const {addTeacher,login,getTeacher} = require('../controller/users')
// 测试
router.get('/test',(req,res,next)=>{
    res.send({msg:'test get'});
})

// 添加老师的接口
//  /users/addTeacher  post  {teacher_name}
router.post('/addTeacher',addTeacher);

// 获取所有老师信息的接口

// /users/getTeacher get  
router.get('/getTeacher',getTeacher);

// 登录接口
// /users/login  post  {username,userpwd}
router.post('/login',login)

module.exports = router;