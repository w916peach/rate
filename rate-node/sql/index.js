module.exports = {
    // 给teacher_info表添加老师信息
    INSERTINTO_TEACHERINFO:'insert into teacher_info (teacher_id,teacher_name) values (?,?)',
    // 查询users中的用户名
    SELECT_USERS_USERPWD:'select * from users where username=?',
    // 获取所有的老师
    SELECT_ALL_TEACHER:'select * from teacher_info'
}