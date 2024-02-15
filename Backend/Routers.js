const mongoose = require("mongoose")
const express = require("express")
const Food  = require("./data/Schema")
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

module.exports= {router}

