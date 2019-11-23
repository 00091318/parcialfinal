const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    pokename:{type:String, unique:true, required:true},
    type: {type:String, required: true},
    evolution:{type: String},
    ability:{type: String},
    ability2:{type: String}
});
module.exports = mongoose.model('users',userSchema);