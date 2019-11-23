const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = Schema({
    pokename: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    required: true,
    type: {
        type: String,
        required: true
    },
    evolution: {
        type: Boolean,
        required: true
    },
    Firstability: string,
    required: true
}, {
    secongability: string,
    required: true
});

module.exports = mongoose.model("User", UserSchema);