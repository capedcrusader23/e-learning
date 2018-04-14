const passport=require("passport");
const credential=require('./crediential');
const googles=require('passport-google-oauth20');
const stud=require('../model/schema');

passport.serializeUser(function(user,done){
done(null,user.id)
});

passport.deserializeUser(function(id,done){
   stud.findById(id).then(function(use){
       done(null,use);
   })
});

passport.use(new googles({
  callbackURL:'/google/redirect',
  clientID:credential.google.id,
  clientSecret:credential.google.ke
},function(accessToken,refresToken,pro,done){
    stud.findOne({GoogleID:pro.id}).then(function(user){
        if(user)
        {
            console.log("already in Database");
            done(null,user);
        }
        else
        {
            new stud({
                name:pro.displayName,
                GoogleID:pro.id,
                thumbnail:pro._json.image.url
            }).save().then(function(us){
                done(null,us);
            })

        }

    })

}));