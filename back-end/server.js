const express =require('express')
const app=express()
const dotenv=require('dotenv')
const cors = require('cors');
const connectDB=require('./config/configdb')
const productsRoutes=require('./routes/productRoute')
require('colors')


dotenv.config()

connectDB()

app.use(cors({ 
    origin: 'http://localhost:3000' 
  }));



app.use('/api',productsRoutes)
app.get('/',(req,res)=>{
    res.json(products)
})


app.listen(process.env.PORT||8000,()=>{console.log('server rinning ')})   