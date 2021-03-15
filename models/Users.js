const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    code: {type:Number, required:true, unique:true},
    userName: {type:String, required:true, unique:false},
    userApellido: {type:String, required:true, unique:false},
    userEmail: {type:String, required:true, unique:true}
})

module.exports = mongoose.model('Users', UserSchema)