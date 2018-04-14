var express=require('express');
var route=express.Router();

const checkauth=function(req,res,next){

    if(!req.user)
    {
        res.render('login');
    }
    else
    {
        console.log("Already logged in");
        next();
    }


};
route.get('/profile',checkauth,function(req,res){
          res.render('home',{profile:req.user});
      });

route.get('/logout',function(req,res){
req.logout();
res.render('login');

});

module.exports=route;
