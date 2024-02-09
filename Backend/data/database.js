const Food = require("./schema.js")
require("dotenv").config({path:'../.env'})

const Food1 = new Food({
    FoodId:"1",
    FoodName:"Chocolte Momos",
    FoodCategory:"Sweet",
    Region:"North India"
})

const Food2 = new Food({
    FoodId:"2",
    FoodName:"Mango with Chilli Powder",
    FoodCategory:"Sweet & Spicy",
    Region:"All India"
})

const Food3 = new Food({
    FoodId:"3",
    FoodName:"Gulab Jamun Chaat",
    FoodCategory:"Sweet & Savory",
    Region:"North India"
})

const Food4 = new Food({
    FoodId:"4",
    FoodName:"Maggi Ice Cream",
    FoodCategory:"Sweet",
    Region:"All India"
})

const Food5 = new Food({
   FoodId:"5",
   FoodName:"Oreo Pakoda",
   FoodCategory:"Sweet",
   Region:"Fusion"
})

const Food6 = new Food({
    FoodId:"6",
    FoodName:"Ice Cream Pani Puri",
    FoodCategory:"Sweet & Spicy",
    Region:"All India"
})

const Food7 = new Food({
    FoodId:"7",
    FoodName:"Chocolate Samosa",
    FoodCategory:"Sweet",
    Region:"Fusion"
})

const Food8 = new Food({
    FoodId:"8",
    FoodName:"Banana and Chaat Masala",
    FoodCategory:"Sweet & Savory",
    Region:"All India"
})

const Food9 = new Food({
    FoodId:"9",
    FoodName:"Misal Pav with Ice Cream",
    FoodCategory:"Sweet & Spicy",
    Region:"Maharashtra"
})

const Food10 = new Food({
    FoodId:"10",
    FoodName:"Jalebi with Dahi",
    FoodCategory:"Sweet & Tangy",
    Region:"All India"
})


const mongoose = require("mongoose")

mongoose.connect(process.env.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to local MongoDB'))
.catch( err => console.error('Error connecting to local MongoDB:', err));

const FoodData = [Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8, Food9, Food10];

// Food.insertMany(FoodData)
// .then(() => console.log('Food added successfully!'))
// .catch(err => console.error('Error adding Food:', err));
