const query = require('../../utils/mysql');
const isTableRepeat = require('../../utils/isTableRepeat');
const uuid = require('uuid/v1');
const sessions = require('../../sessions');
const {INSERTINTO_TEACHERINFO,SELECT_ALL_TEACHER,SELECT_USERS_USERPWD} = require('../../sql');
let addTeacher = async (req,res,next)=>{
    let {teacher_name} = req.body;
    if(!teacher_name){
        res.send({msg:'参数错误',code:0});
        return;
    }
    // 验证老师名是否重复
    let isRepeat = await isTableRepeat('teacher_name','teacher_info',teacher_name);
    console.log(isRepeat);
    if(isRepeat){
        res.send({msg:'教师名重复',code:0});
        return;
    }
    // 生成teahcer_id
    let teacher_id = uuid();
    // 存入数据库
    query(INSERTINTO_TEACHERINFO,[teacher_id,teacher_name]).then(result=>{
        if(process.env.NODE_ENV === 'development'){
            console.log({msg:'老师添加成功',code:1})
        }else{
            res.send({msg:'老师添加成功啦！',code:1,teacher_id});
        }
        
    })
}

let getTeacher = async (req,res,next)=>{
    let teacherList = await query(SELECT_ALL_TEACHER);
    res.send({msg:'获取老师列表成功',code:1,teacherList});
}
let login = async (req,res,next)=>{
    let {username,userpwd} = req.body;
    // 正则验证  
    // 验证用户名是否存在
    let isUsername = await isTableRepeat('username','users',username);
    if(!isUsername){
        res.send({msg:'该用户不存在',code:0});
        return;
    }
    // 验证密码是否正确
    let queryInfo = await query(SELECT_USERS_USERPWD,[username]);
    if(userpwd !== queryInfo[0].userpwd){
        res.send({msg:'密码不正确',code:0});
        return;
    }
    // 用户名和密码都验证通过
    // 得到该用户的信息
    let userInfo = {...queryInfo[0]};
    
    // 单点登录,判断是否登录过
    let sessionIndex = sessions.findIndex(item=>item.username === username);
    if(sessionIndex !== -1){
        // 如果已经登录后，就删除之前的登录信息
        sessions.splice(sessionIndex,1);
        return;
    }
    // 生成sessionid
    let sessionid = uuid();
    // 记录用户信息  username userpwd userid 
    sessions.push({...userInfo,sessionid});
    // 响应用户数据
    res.send({msg:'登录成功',code:1,sessionid,username});

}
module.exports = {addTeacher,login,getTeacher}



  