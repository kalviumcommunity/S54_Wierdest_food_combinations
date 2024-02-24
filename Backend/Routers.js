const mongoose = require("mongoose")
const express = require("express")
const Food  = require("./data/Schema")
const app = express()
const router = express.Router()
require("dotenv").config()
app.use(express.json())

const { allCombinations, addCombination, getOneCombination, updateCombination,deleteCombination} = require('./Controller')

async function connect(){
    await mongoose.connect(process.env.mongoUrl)
}

connect()
.then(() => {
    console.log("Connected to Database!!!")
}).catch((err) => {
    console.log("Error Connecting to Database!!!")
})



router.get('/foodsData',allCombinations)

router.get('/:id',getOneCombination)

router.post('/post', addCombination)

router.put('/:id', updateCombination)

router.delete('/:id', deleteCombination)

module.exports = {router}
