const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require('cors');
const app = express();
app.use(cors());
const { router } = require("./Routers");
const mongoose = require("mongoose");
require("dotenv").config();

async function connectDatabase() {
    await mongoose.connect(process.env.mongoUrl);
}

app.get("/ping", (req, res) => {
    res.send("Hi");
});

app.get("/", async (req, res) => { // Use async here
    try {
        await connectDatabase(); // Wait for the database connection
        console.log('Connected to Database!!!');
        res.status(200).send("Connected to Database!!!");
    } catch (err) {
        console.error('Error connecting to Database', err);
        res.status(500).send("Error connecting to Database"); // Send appropriate error response
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.use("/foodsData", router);

app.listen(3000, () => {
    console.log("Running on port 3000");
});