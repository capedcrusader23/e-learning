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

route.get('/github',passport.authenticate('github'));



route.get('/github/redirect',passport.authenticate('github'),function(req,res){
   res.send('Logged in Using fb');
});
module.exports=route;