const extraCatModel = require("../models/extraCategorySchema")

const findExtra=async(req,res)=>{
    let extra=await extraCatModel.find();
    return res.render('extra',{extra,messages:req.flash("flashMage")})
}
const extra_create=async(req,res)=>{
    try {
        let extracat=await extraCatModel.create(req.body);
        return res.redirect('/')
    } catch (error) {
        res.send(error.message);
    }
  
};

module.exports={extra_create,findExtra}