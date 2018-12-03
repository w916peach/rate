const express = require('express');
const router = express.Router();

// /toolpage/mangerTeacher.html
router.get('/mangerTeacher.html',(req,res,next)=>{
    res.render('mangerTeacher',{});
})

module.exports = router;