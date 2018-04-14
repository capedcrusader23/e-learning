var express=require('express');
var route=express.Router();
var passport=require('passport');

route.get('/',function(req,res){
   res.render('login');
});

route.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

route.get('/google/redirect',passport.authenticate('google'),function(req,res){
   res.redirect('/profile');
});

module.exports=route;