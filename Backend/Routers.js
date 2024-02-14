const mongoose = require("mongoose")
const express = require("express")
const Food  = require("./data/schema")
const app = express()
const router = express.Router()
require("dotenv").config()

app.use(express.json())

async function connect(){
    await mongoose.connect(process.env.mongoUrl)
}

connect()
.then(() => {
    console.log("Connected to Database!!!")
}).catch((err) => {
    console.log("Error Connecting to Database!!!")
})

router.get("/", async (req,res) => {
    await Food.find().then((data) => {
        returnData = data
        res.send(data)
    })
})

// router.post("/", async (req,res) => {
//     const newdata = new Food(req.body)
//     await newdata.save().then((result) => {
//         res.send("New Food Added!!!")
//     }).catch((err) => {
//         res.status(500).send(err)
//     })
// })

// router.put("/:FoodId", async (req,res)=> {
//     try{
//         let {FoodId} = req.params
//         let newData = req.body

//         let result  = await Food.findOneAndUpdate({FoodId: FoodId}, newData)

//         if (result === null || result === undefined){
//             res.status(404).send(err)
//         }
//         else{
//             res.send("Updated!!!")
//         }c d
//     }catch(err){
//         res.status(500).send("Error!!!: ",err.message)
//     }
// })

// router.delete("/", async (req,res) => {
//     let deleteFood = req.body.title

//     try{
//         let result = await Food.deleteOne({title: deleteFood})

//         if(result.deletedCount == 0){
//             res.status(404).send("Food not found!!!!")
//         }
//         else{
//             res.send("Food Deleted!!!")
//         }
//     }catch(err){
//         res.status(500).send("Error Deleting Food",err.message)
//     }


// })

module.exports= {
    router
}