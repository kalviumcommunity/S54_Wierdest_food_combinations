const express = require("express");
const { MongoClient } = require("mongodb");
var cors = require('cors')
const app = express();
app.use(cors())
const {router} = require("./Routers")
const mongoose = require("mongoose")
require("dotenv").config()

async function connectDatabase(){
	await mongoose.connect(process.env.mongoUrl)
}

app.get("/ping", (req, res) => {
	res.send("Hi");
});

app.get("/", (req, res) => {
	connectDatabase()
	.then(() => {
		console.log('Connected to Database!!!')})
	.catch(err => {
		console.error('Error connecting to Database',err)});;
	res.end()
});

app.use("/foodsData",router)

app.listen(3000,() => {
	console.log("Running on port 3000")
})
