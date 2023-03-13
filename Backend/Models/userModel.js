const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:8,
        unique:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }

});

const UserModel = mongoose.model('Users',UserSchema);

module.exports = UserModel;