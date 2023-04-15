const mongoose=require('mongoose');

const connectDB=async()=>{
    try
    {
const connect=await mongoose.connect(process.env.MONGO_URI)
console.log('mongodbconnected:',connect.connection.host.yellow)
    }
    catch(err){console.error('DB_ERROR:',err.message.red)
process.exit(1)}
    
}
module.exports=connectDB 