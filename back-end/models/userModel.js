const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const userSchema=mongoose.Schema({
    name:{type: String,
        required:true}
,
email:{type: String,
    required:true}
,
password:{type: String,
    required:true}
,
isAdmin:{
    type:Boolean,
    required:true,
    default:false
}
},{timestamps:true})

const User=mongoose.model('User',userSchema)


userSchema.methods.matchPassword=async(initialPassword)=>{
    return await bcrypt.compare(initialPassword,this.password)}
module.exports = User;