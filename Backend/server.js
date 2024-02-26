const express = require("express");
const mongoose = require("mongoose");
const { router } = require("./Routers");
const { addCombination, allCombinations, updateCombination, deleteCombination } = require("./Controller");
const {getAllUser, getOneUser, addUserData } = require("./UserController");
const UserValidation= require("./UserValidation")
const Joi =require('joi')
require("dotenv").config();

const app = express();
app.use(express.json())

const cors = require('cors');
app.use(cors());

const validateCombinationRequest = (req, res, next) => {
      const { error } = UserValidation.validate(req.body, { abortEarly: false });
      if (error) {
        const errorMessages = error.details.map((detail) => detail.message);
        return res.status(400).json({ error: errorMessages });
      }
      next();
    };
    
async function connectDatabase() {
    try {
        await mongoose.connect(process.env.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Database!!!');
    } catch (err) {
        console.error('Error connecting to Database', err);
        throw err;
    }
}

app.get("/ping", (req, res) => {
    res.send("Hi");
});

app.get("/", async (req, res) => {
    try {
        await connectDatabase();
        res.status(200).send("Connected to Database!!!");
    } catch (err) {
        res.status(500).send("Error connecting to Database");
    }
});

app.use("/foodsData", allCombinations);
app.use("/post",validateCombinationRequest, addCombination);
app.use("/edit/:id", validateCombinationRequest,updateCombination);
app.use("/delete/:id", deleteCombination);

app.use('/userdata',getAllUser)
app.use('userdata/:id',getOneUser)
app.use('/auth', addUserData)

app.listen(3000, () => {
    console.log("Running on port 3000");
});