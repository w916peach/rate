const query = require('./mysql');
query('select * from teacher_info').then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})