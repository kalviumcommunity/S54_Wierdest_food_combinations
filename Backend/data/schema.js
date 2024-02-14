const mongoose = require("mongoose")

const schema = mongoose.Schema

const FoodSchema = new schema({
 FoodId: {
        type: Number,
        required: true
    },
 FoodName: {
        type: String,
        required: true 
    },
 FoodCategory: {
        type: String,
        required: true 
    },
  Image:{
    type:String,
    required: true
  },
 Region:{
        type: String,
        required: true 
  },   
    Name:String,
    UserName:String,
    Email:String,
    Password:String,
})

const FoodModel = mongoose.model( "Food" ,FoodSchema)

module.exports = FoodModel