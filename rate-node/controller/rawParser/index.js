const querystring = require('querystring');
module.exports = (req,res,next)=>{
    let raw = '';
    req.on('data',chuck=>{
        raw += chuck;
    });
    req.on('end',()=>{
        try{
            req.body = JSON.parse(raw);
        }catch(err){
            try{
                req.body = querystring.parse(raw);
            }catch(err){

            }
        }
        next();
    })
}