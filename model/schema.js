const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const stud=new Schema({
    name:{
        type:String
    },
    GoogleID:{
        type:String
    },
    thumbnail:{
        type:String
    }
});

const stude=mongoose.model('Stud',stud);
module.exports=stude;