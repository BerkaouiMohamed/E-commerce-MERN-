import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import {motion} from 'framer-motion'
import { useEffect  } from 'react';
import { useDispatch,useSelector } from "react-redux";
import {listProductDetails} from '../redux/actions/productActions'
import { useNavigate, useParams } from 'react-router-dom';


function ProductDetails() {
  const [quantity,setQuantity]=useState(1)
  const handleQuantety=(e)=>setQuantity(e.target.value)
 const dispatch=useDispatch()

  const { id } = useParams();
  const navigate = useNavigate();
 

const productDetails=useSelector(state=>state.productDetails)
  useEffect(() => {
 
    dispatch(listProductDetails(id))
  }, [dispatch]);


  const {loading,error,product}=productDetails

const handleAddtoCart=()=>{
 navigate(`/cart/${id}?qty=${quantity}`)
}

  const handleBackButtonClick = () => {
    navigate(-1); 
  };

  if (product) {
  
 
  return (
    <motion.div  initial={{ opacity: 0,y:100 }}
    animate={{ opacity: 1,y:0 }}
    exit={{ opacity: 0 ,y:-100}}
    transition={{ duration: 0.8 }} className="h-max pt-20 w-screen flex justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row">
      <button
              onClick={handleBackButtonClick}
              className="bg-gray-500 bg-opacity-50 text-s text-white h-10 px-2 py-2 mt-2 rounded-sm hover:bg-gray-600 flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Back
            </button>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-4/5 rounded-lg shadow-lg mb-4"
          />
          <div className="flex w-full justify-center mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 rounded-lg border-2 border-gray-200 mr-2 cursor-pointer"
            />
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 rounded-lg border-2 border-gray-200 mr-2 cursor-pointer"
            />
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 rounded-lg border-2 border-gray-200 mr-2 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-6">
          <div className="flex items-center">
          
          </div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <hr/>

          <div className="flex flex-col">
            <p className="text-lg m-2">
              <span className="font-bold">Description:</span>{" "}
              {product.description}
            </p>
            <hr/>
            <p className="text-lg m-2">
              <span className="font-bold">Brand:</span> {product.brand}
            </p>
            <hr/>
           
            <p className="text-lg m-2">
              <span className="font-bold">Category:</span> {product.category}
            </p>
            <hr/>
            <p className="text-lg m-2">
              <span className="font-bold">Price:</span> {product.price} USD
            </p>
            <hr/>
            <p className="text-lg m-2">
              {  product.countInStock>0?<>
              <span className="font-bold">Count in stock:</span>{" "}
              {product.countInStock}</>:null
              }
            </p>

            <hr/>
            <p className="text-lg m-2">
            {product.countInStock > 0 ? (
  <>
    <span className="font-bold">quantity:</span>{" "}
    <form>
      <input value={quantity} onChange={handleQuantety} type="number" />
      {quantity>product.countInStock? <h1 className='text-red-600 font-bold'>{product.countInStock} Maximum</h1>:null}
    </form>
  </>
) : null}
            </p>
          </div>
          <button onClick={handleAddtoCart} className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  ); }
  else{}
}

export default ProductDetails;
