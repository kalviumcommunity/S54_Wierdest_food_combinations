const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    FoodId: String,
    Image: String,
    FoodName: String,
    FoodCategory: String,
    Region: String
});

const Food = mongoose.model("foods", foodSchema);

module.exports = Food;