const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    FoodId: String,
    Image: String,
    FoodName: String,
    FoodCategory: String,
    Region: String
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;