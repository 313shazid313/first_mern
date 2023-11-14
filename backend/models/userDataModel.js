const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    name: {
      type:String,
      required:true
    },
    email:{
      type:String,
      unique:true,
      required:true
    },
    age:{
      type:Number
    },
 
  },
  {timestamps : true}
);

const userData = mongoose.model("userData",userSchema)
module.exports = userData;