const Food = require("./Schema.js")
require("dotenv").config({path:'../.env'})
const mongoose = require("mongoose");

const Food1 = new Food({
    FoodId:"1",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBF1HHjUUWfVEem32aGxjOiTSW1q9Q8AC0p8j9OIs8qw&s",
    FoodName:"Chocolte Momos",
    FoodCategory:"Sweet",
    Region:"North India"
})

const Food2 = new Food({
    FoodId:"2",
    Image: "https://live.staticflickr.com/7565/15958309016_86fa9d0c39_z.jpg",
    FoodName:"Mango with Chilli Powder",
    FoodCategory:"Sweet & Spicy",
    Region:"All India"
})

const Food3 = new Food({
    FoodId:"3",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0AaUdPHkaHHW-fHvKLPhcIij2PtLYJ3ybg9zDV1iiVvWY9S1LfT7cYr9UmoFi2QWRgM&usqp=CAU",
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
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5ZQuoFXRGVnr6U5ImwewcQ4k23WMu_Qq_g&s",
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
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxErHNAMGP0BmE_SsuQfyRDWCQJNO54fl0Bw&s",
    FoodName:"Banana and Chaat Masala",
    FoodCategory:"Sweet & Savory",
    Region:"All India"
})

const Food9 = new Food({
    FoodId:"9",
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3XZgBaXUdRhvNSQqwbSFpqI5iR6B95yWwA&s",
    FoodName:"Jalebi with Dahi",
    FoodCategory:"Sweet & Tangy",
    Region:"All India"
})

const Food10 = new Food({
    FoodId:"10",
    Image:"https://thumbs.dreamstime.com/z/breakfast-cereal-orange-orange-juice-19451107.jpg",
    FoodName:"Cereal and Orange Juice.",
    FoodCategory:"Sweet & Tangy",
    Region:"Global"
})

const Food11 = new Food({
    FoodId:"11",
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIHkJ7dRSK_pQ7asyKbc2W4-UNPogc3Ji3g&s",
    FoodName:"Coca-Cola and Peanuts.",
    FoodCategory:"Sweet & Salty",
    Region:"Global"
})
const Food12 = new Food({
    FoodId:"12",
    Image:"https://cdn.openart.ai/stable_diffusion/18fbc153cf69bdba7914e07c16c184c69ac12f96_2000x2000.webp",
    FoodName:"Orange Juice and Oreos",
    FoodCategory:"Sweet & Creamy",
    Region:"All India"
})


mongoose.connect(process.env.mongoUrl)
.then(() => console.log('Connected to local MongoDB'))
.catch( err => console.error('Error connecting to local MongoDB:', err));

const FoodData = [Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8, Food9, Food10, Food11, Food12];

Food.insertMany(FoodData)
.then(() => console.log('Food added successfully!'))
.catch(err => console.error('Error adding Food:', err));
