const { Router } = require("express");
const { subCat_create, getExtacatData, updatextaCat, findSub } = require("../controllers/subCategory.controller");

const subCat_router=Router();

subCat_router.get('/addsub',findSub);
subCat_router.post('/addsub',subCat_create);
subCat_router.patch('/update/:id',updatextaCat);
subCat_router.get('/data',getExtacatData)

module.exports=subCat_router;
