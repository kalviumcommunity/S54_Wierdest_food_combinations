const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const schema = require("./data/Schema");

const allCombinations = async (req, res) => {
  try {
    const allCombinationsData = await schema.find({});
    res.status(200).json(allCombinationsData);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching all combinations" });
  }
};

const getOneCombination = async (req, res) => {
  try {
    const oneCombination = await schema.findById(req.params.id);
    if (!oneCombination) {
      return res.status(404).json({ message: "Combination not found" });
    }
    res.status(200).json({ message: `See combination for ${req.params.id}`, oneCombination });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching single combination" });
  }
};

const addCombination = async (req, res) => {
  try {
    const body = req.body;
    const { id, Image, FoodName, FoodCategory, Region } = body;

    if (!FoodName || !FoodCategory || !Region || !Image) {
      res.status(400).json({ error: "Enter all fields" });
      throw new Error("Enter all fields");
    }

    const createCombination = await schema.create({
      FoodId: id,
      Image,
      FoodName,
      FoodCategory,
      Region
    });

    res.status(201).json({ message: "Combination created", createCombination });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error while creating" });
  }
};

const updateCombination = async (req, res) => {
  try {
    const update = await schema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Combination updated", update });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error while updating" });
  }
};

const deleteCombination = async (req, res) => {
  try {
    const deleteIt = await schema.findByIdAndDelete(
      req.params.id
    );
    if (!deleteIt) {
      return res.status(404).json({
        message: `Combination not found for ${req.params.id}`,
      });
    }
    res.status(200).json({
      message: `Deleted combination for ${req.params.id}`,
      deleteIt,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error while deleting" });
  }
};

module.exports = {
  allCombinations,
  getOneCombination,
  addCombination,
  updateCombination,
  deleteCombination,
};
