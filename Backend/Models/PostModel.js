const mongoose = require("mongoose");


const postModel =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    smallSummary:{
        type:String,
        required:true
    },
    postContent:{
        type:String,
        required:false
    },
    tags:{
        type:String,
        required:false
    },
    userId:{
        type:String,
        required:true
    },
    file:{
        type:String,
        require:false
    }
},{
    timestamps:true
})

const PostModel = mongoose.model('posts',postModel)

module.exports = PostModel;