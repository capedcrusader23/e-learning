const passport=require('passport');
const googlest=require('passport-google-oauth20');
const key=require('./crediential');
const User=require('../model/schema');



passport.serializeUser(function(user,done)
{
 done(null,user.id)
});
passport.deserializeUser(function(id,done)
{
   User.findById(id).then(function (mem) {
       done(null,mem)
   })
});

passport.use(new googlest({
    callbackURL:'/google/redirect',
clientID:key.google.id,
    clientSecret:key.google.ke
    }
,function(accessToken,refreshToken,pro,done){
    User.findOne({id:pro.id}).then(function(user){
if(user){
console.log('Already in DB');
done(null,user);
}
else{

            new User({
                name:pro.displayName,
                googleid:pro.id
            }).save().then(function(user){
                done(null,user);
            });

        }
        });

}));