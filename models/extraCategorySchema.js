const mongooes=require('mongoose');

const extraCatSchema= new mongooes.Schema({
    name: String,

});

const extraCatModel=mongooes.model('extraCatTbl', extraCatSchema);

module.exports=extraCatModel;