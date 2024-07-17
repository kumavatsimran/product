const  mongooes=require('mongoose');

const otpSchema=new mongooes.Schema({
    otp:Number
});


const otpModel=mongooes.model('otpTbl', otpSchema);

module.exports=otpModel;