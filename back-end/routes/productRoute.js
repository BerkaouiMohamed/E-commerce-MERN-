
const router =require('express').Router()
const Products=require('../models/productModel.js')
const asyncHandler = require('express-async-handler');




router.get('/products',asyncHandler(async(req,res)=>{
const products=await Products.find({}) 
   res.json(products)
}))

router.get('/products/:id', asyncHandler(async(req, res) => {
  const product = await Products.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: "product not found" })
  }
}))

  module.exports=router