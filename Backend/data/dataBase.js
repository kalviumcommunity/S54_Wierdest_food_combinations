const Food = require("./schema.js")
require("dotenv").config({path:'../.env'})
const mongoose = require("mongoose");

const Food1 = new Food({
    FoodId:"1",
    Image: "https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcTv6G7PI-MPPWaEEOi0qPXe0y4qWyKosfqvPF8kJx5s5oD05hAS",
    FoodName:"Chocolte Momos",
    FoodCategory:"Sweet",
    Region:"North India"
})

const Food2 = new Food({
    FoodId:"2",
    Image: "https://encrypted-tbn1.gstatic.com/imagesq=tbn:ANd9GcRmyzV0MYE1-8gDf8D3TQ_PxpnmcCldX5W09vWvqQ34MoeSEElH",
    FoodName:"Mango with Chilli Powder",
    FoodCategory:"Sweet & Spicy",
    Region:"All India"
})

const Food3 = new Food({
    FoodId:"3",
    Image: "https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcQFrhfYMNYFXAHgfD7xN6UjPbWq8GsGOLZet0EQ5F99GfsMjKUX",
    FoodName:"Gulab Jamun Chaat",
    FoodCategory:"Sweet & Savory",
    Region:"North India"
})

const Food4 = new Food({
    FoodId:"4",
    Image: "https://t1.gstatic.com/images?q=tbn:ANd9GcS6uYZbIA-DinMlU2cwiDJ83_okNFdYPWaEC4nb2cV7WogtHEKd",
    FoodName:"Maggi Ice Cream",
    FoodCategory:"Sweet",
    Region:"All India"
})

const Food5 = new Food({
   FoodId:"5",
   Image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSaD50I8bE8ZbALRZN3bxf-78ZQcVsgCenvb1UUY5GwQwqKhiz",
   FoodName:"Oreo Pakoda",
   FoodCategory:"Sweet",
   Region:"Fusion"
})

const Food6 = new Food({
    FoodId:"6",
    Image:"https://encrypted-tbn3.gstatic.com/imagesq=tbn:ANd9GcSjD700emAXshwRb5_ErQjoSFjIluQu4C2tWto_NgXPft2pFvM0",
    FoodName:"Ice Cream Pani Puri",
    FoodCategory:"Sweet & Spicy",
    Region:"All India"
})

const Food7 = new Food({
    FoodId:"7",
    Image:"https://5.imimg.com/data5/SELLER/Default/2023/1/UK/CT/SE/184016116/chocolate-samosa-500x500.jpeg",
    FoodName:"Chocolate Samosa",
    FoodCategory:"Sweet",
    Region:"Fusion"
})

const Food8 = new Food({
    FoodId:"8",
    Image:"https://encrypted-tbn1.gstatic.com/imagesq=tbn:ANd9GcRILxVCdAz1hQdXxFnwkmwfwGGdF3A6Gb1FEEC9x5GUMkgmIkV_",
    FoodName:"Banana and Chaat Masala",
    FoodCategory:"Sweet & Savory",
    Region:"All India"
})

// const Food9 = new Food({
//     FoodId:"9",
//     // Image:"",
//     FoodName:"Misal Pav with Ice Cream",
//     FoodCategory:"Sweet & Spicy",
//     Region:"Maharashtra"
// })

const Food9 = new Food({
    FoodId:"9",
    Image:"https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcS4aYyVdTNuD-AxI8j9I9qAIn9VLZjoLfwadu8Vg_t6VwxbwM1u",
    FoodName:"Jalebi with Dahi",
    FoodCategory:"Sweet & Tangy",
    Region:"All India"
})

mongoose.connect(process.env.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to local MongoDB'))
.catch( err => console.error('Error connecting to local MongoDB:', err));

const FoodData = [Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8, Food9];

Food.insertMany(FoodData)
.then(() => console.log('Food added successfully!'))
.catch(err => console.error('Error adding Food:', err));
