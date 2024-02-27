const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    FoodId: String,
    Image: String,
    FoodName: String,
    FoodCategory: String,
    Region: String,
    Created_By:String
});

const Food = mongoose.model("foods", foodSchema);

module.exports = Food;