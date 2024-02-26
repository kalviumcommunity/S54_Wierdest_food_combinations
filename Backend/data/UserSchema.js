const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Name: String,
    Username: String,
    Email_id: String,
    Password: String
});

const User = mongoose.model("users", UserSchema);

module.exports = User;