const express =require('express')
const app=express()
const {errorHandler}=require('./middlewares/errorMideleware')
const dotenv=require('dotenv')
const cors = require('cors');
const connectDB=require('./config/configdb')
const productsRoutes=require('./routes/productRoute')
const usersRoutes=require('./routes/usersRoute')
require('colors')


dotenv.config()

connectDB()
//bodyparser
app.use(express.json())
app.use(cors({ 
    origin: 'http://localhost:3000' 
  }));


  

app.use('/api',productsRoutes)

app.use('/api/users',usersRoutes)

app.use(errorHandler)
app.listen(process.env.PORT||8000,()=>{console.log('server rinning ')})   