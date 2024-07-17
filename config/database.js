const mongoose= require("mongoose");
const database= async()=>{
   try {
    await mongoose.connect("mongodb+srv://simranKumavat:simran12345@cluster0.arrsyvy.mongodb.net/adminPro");
    console.log("Database connected..!")
   } catch (error) {
    console.log(error);
   }
}
module.exports= database
