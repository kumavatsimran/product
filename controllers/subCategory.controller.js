const subCategoryModel = require("../models/subCategorySchema")

const findSub=async(req,res)=>{
  try {
    let subCat=await subCategoryModel.find()
    return res.render('addsub',{subCat,messages:req.flash("flashMage")})
  } catch (error) {
    res.send(error.message);

  }
}

const subCat_create=async(req,res)=>{
    try {
        let subcat=await subCategoryModel.create(req.body);
        return res.redirect('/')
      } catch (error) {
        res.send(error.message);
    }
};
const updatextaCat = async (req, res) => {
    let { id } = req.params;
    let extracat = await subCategoryModel.findById(id);
   extracat.extraCategoryId = req.body.extraCategoryId;
    extracat.save();
    res.send(extracat);
  };

  
const getExtacatData = async (req, res) => {
    let data = await subCategoryModel.find().populate("extraCategoryId");
    res.send(data);
  };
  
  


module.exports={subCat_create,updatextaCat,getExtacatData,findSub}