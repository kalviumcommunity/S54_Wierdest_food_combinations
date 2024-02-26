const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken")
const app = express();
const cors = require("cors");
app.use(cors());
const UserSchema = require("./data/UserSchema");

const getAllUser = async (req, res) => {
  try {
    const allUserData = await UserSchema.find({});
    res.status(200).json(allUserData);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching all User data" });
  }
};

const getOneUser = async (req, res) => {
  try {
    const oneUser = await UserSchema.findById(req.params.id);
    if (!oneUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: `See user for ${req.params.id}`, oneUser });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching single user" });
  }
};



const addUserData = async (req, res) => {
  try {
    const { Name, Username, Email_id, Password } = req.body;

    if (!Name || !Username || !Email_id || !Password) {
      res.status(400).json({ error: "Enter all fields" });
      throw new Error("Enter all fields");
    }

    const createUserData = await UserSchema.create({
      Name,
      Username,
      Email_id,
      Password
    });

    // if (createUserData) {
    //   const { Username } = createUserData;
    //   const token = jwt.sign({ username: Username }, process.env.SECRET_KEY);
    //   console.log(token);
    //   res.status(201).json({ token }); 
    // } else {
    //   res.status(400).json({ message: "Error while creating new user" });
    // }

  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error while creating" });
  }
};

module.exports = {
  getAllUser,
  getOneUser,
  addUserData,
};
