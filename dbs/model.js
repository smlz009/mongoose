const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    info:{
        type:String,
        default:'lsp'
    },
    register_date:{
        type:Date,
        default:Date.now()
    }
},{
    collection:'user'
})

module.exports = mongoose.model('user',userSchema)