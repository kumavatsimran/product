const { Router } = require("express");
const { cat_Create, updateData, getData, categryFind } = require("../controllers/category.controller");


const cat_router=Router();

cat_router.get('/addcategroy',categryFind);
cat_router.post('/addcategroy',cat_Create);
cat_router.patch('/update/:id',updateData);
cat_router.get('/data',getData)

module.exports=cat_router