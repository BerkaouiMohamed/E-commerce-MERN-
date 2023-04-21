
const router =require('express').Router()
const{getProduct,getProducts}=require('../controllers/productsControllers')


router.get('/products',getProducts)


router.get('/products/:id',getProduct)

  module.exports=router