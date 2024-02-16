const mongoose = require("mongoose");
const express = require("express");
const schema = require("./data/Schema");
const asyncHandler = require("express-async-handler");

const allCombinations = asyncHandler(async (req, res) => {
  try {
    const AllCombinations = await schema.find({});
    res.status(200).json(AllCombinations);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching All Combination" });
  }
});

const getOneCombination = asyncHandler(async (req, res) => {
  try {
    const OneCombination = await schema.findById(req.params.id);
    if (!OneCombination) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.status(200).json({ message: `See Collection for ${req.params.id}`, OneCombination });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching single Collection" });
  }
});


const addCombination = asyncHandler(async (req, res) => {
  try {
    const body = req.body;
    const { FoodId, FoodName, FoodCategory, Region, Image } = body;

    if (!FoodName || !FoodCategory || !Region || !Image) {
      res.status(400).json({ error: "Enter all fields" });
      throw new Error("Enter all fields");
    }
    const createCombination = await schema.create({
      FoodId,
      Image,
      FoodName,
      FoodCategory,
      Region
    });
    res.status(201).json({ message: "Create Combination", createCombination });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error while creating" });
  }
});

const updateCombination = asyncHandler(async (req, res) => {
  try {
    const update = await schema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Update all Combination", update });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error while Updating" });
  }
});


const deleteCombination = asyncHandler(async (req, res) => {
  try {
    const deleteIt = await schema.findByIdAndDelete(
      req.params.id
    );
    if (!deleteIt) {
      return res.status(404).json({
        message: `Collection not found for ${req.params.id}`,
      });
    }
    res.status(200).json({
      message: `Deleted Collection for ${req.params.id}`,
      deleteIt,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error while deleting" });
  }
});


module.exports = {
  allCombinations,
  getOneCombination,
  addCombination,
  updateCombination,
  deleteCombination,
};
