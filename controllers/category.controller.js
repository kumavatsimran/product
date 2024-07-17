const { model } = require("mongoose");
const categoryModel = require("../models/categorySchema");

const categryFind = async (req, res) => {
  try {
    let cat = await categoryModel.find();
    return res.render('addcategroy',{cat,messages:req.flash("flashMage")})
    // pagename
  } catch (error) {
    res.send(error.message);
  }
};

const cat_Create = async (req, res) => {
  try {
    let cat = await categoryModel.create(req.body);
    return res.redirect('/')
  } catch (error) {
    res.send(error.message);
  }
};



const updateData = async (req, res) => {
  let { id } = req.params;
  let cat = await categoryModel.findById(id);
  cat.subCategoryId = req.body.subCategoryId;
  cat.save();
  res.send(cat);
};

const getData = async (req, res) => {
  let data = await categoryModel.find().populate({
    path : "subCategoryId", populate :{
      path: "extraCategoryId"
    }
  });
  res.send(data);
};

module.exports = { cat_Create, updateData, getData,categryFind };
