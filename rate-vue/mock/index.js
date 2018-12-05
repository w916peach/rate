const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
module.exports = (app)=>{
    // 处理前端传递的数据
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get('/test',(req,res,next)=>{
        res.send('test get');
    });

    // 返回总分数据
    app.get('/getAllScore',(req,res,next)=>{
        let user = req.query.user;
        let allScore = fs.readFileSync(path.join(__dirname,'./public/总分',user+'.json'),'utf-8');
        allScore = JSON.parse(allScore);
        res.send({msg:'成功',code:1,allScore});
    });
    // 返回明细的数据
    app.get('/getDetailScore',(req,res,next)=>{
        let user = req.query.user;
        let detailScore = fs.readFileSync(path.join(__dirname,'./public/明细',user+'.json'),'utf-8');
        detailScore = JSON.parse(detailScore);
        res.send({msg:'成功',code:1,detailScore});
    })
}