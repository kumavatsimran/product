const categoryModel = require("../models/categorySchema");
const extraCatModel = require("../models/extraCategorySchema");
const ProductDB = require("../models/productSchema");
const subCategoryModel = require("../models/subCategorySchema");
// const flash=require("connect-flash")

const productPage = async (req, res) => {
  try {
      
    let cat= await categoryModel.find();
    let subCat= await subCategoryModel.find();
    let extra=await extraCatModel.find();
    return res.render("Product",{
      cat,subCat,extra
    });
    // res.render("Product");
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (req, res) => {
  console.log("enter");
  try {
    let {image,title,price,description}=req.body
    await ProductDB.create(req.body);
    console.log(req.body,"kk")
    req.flash('flashMsg','ProductAdded')
    return res.redirect("/",);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await ProductDB.findByIdAndDelete(id);
    console.log(data);
    req.flash('flashMsg','deleteProduct')
    // res.send('data deleted..')
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
let proId
const editProduct = async (req, res) => {
  const { id } = req.params;
proId=id
  try {
    const data = await ProductDB.findById(id);
    // console.log(blog);
    return res.render("edit", {data});
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    // let { id } = req.params;
    console.log(proId,"id")
    let data = await ProductDB.findByIdAndUpdate(proId, req.body);
    console.log(data,"data")
    req.flash('flashMsg','UpadteProduct')

    return res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};


 

const getData = async (req, res) => {
  let data = await ProductDB.find({});
  res.send(data);
};
module.exports = {
  productPage,
  addProduct,
  getData,
  deleteProduct,
  updateProduct,
  editProduct,
};
