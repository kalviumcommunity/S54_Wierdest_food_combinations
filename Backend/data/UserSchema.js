const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Name: {
        type:String,
        required:true
    },
    Username: {
        type:String,
        required:true,
        unique:true
    },
    Email_id: {
        type:String,
        required:true,
        unique:true
    },
    Password: {
        type:String,
        required:true
    }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;