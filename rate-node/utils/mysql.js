const mysql = require('mysql');
var pool  = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'rate'
});

function getConnection(){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err) throw err;
            resolve(connection);
        })
    })
}

function querySql(connection,sql,query){
    return new Promise((resolve,reject)=>{
        connection.query(sql,query,(err,reslut)=>{
            connection.release(); // 释放链接
            if(err){
                reject({code:0,msg:'数据库错误'});
                throw err;
            } 
            resolve(reslut);
        })
    })
}

module.exports = async (sql,query=[])=>{
    let connection = await getConnection();
    let result = await querySql(connection,sql,query);
    return result;
}


