const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt-nodejs');

//esquema de usuarios
const userSchema = new Schema({
    pokename:{type:String, unique:true, required:true},
    type: {type:String, required: true},
    evolution:{type: String},
    ability:{type: string},
    ability2:{type: string}
});

module.exports = mongoose.model('users',userSchema);