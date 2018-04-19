const passport=require('passport');
const twitter=require('passport-twitter');

passport.use(new twitter({
    callbackURL:'http://127.0.0.1:3600/twitter/redirect',
    consumerKey:'jZ2U7WTMEaNfrsAXjM5K066U5',
    consumerSecret:'grUurtgv6hE92HWiCIcbhuS8CxWqi85tLPHOg3p7geyjQ9ZucE'
    },function(token,tokenSecret,pro,done){
    console.log(pro);
    })
);

