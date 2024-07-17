const { Router } = require("express");
const { extra_create, findExtra } = require("../controllers/extraCategory.controller");


const extraCat_router= Router();

extraCat_router.get('/addextra',findExtra);
extraCat_router.post('/addextra',extra_create);

module.exports=extraCat_router;

