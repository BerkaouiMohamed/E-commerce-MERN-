
const router =require('express').Router()
const{authController}=require('../controllers/usersControllers')


router.post('/login',authController)




  module.exports=router