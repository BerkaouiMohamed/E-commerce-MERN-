const Products=require('../models/productModel.js')
const asyncHandler = require('express-async-handler');

const getProducts=asyncHandler(async(req,res)=>{
    const products=await Products.find({}) 
       res.json(products)})



       
       const getProduct= asyncHandler(async(req, res) => {
        const product = await Products.findById(req.params.id)
        if (product) {
          res.json(product)
        } else {
          res.status(404).json({ message: "product not found" })
        }
      })
      module.exports={getProduct,getProducts}