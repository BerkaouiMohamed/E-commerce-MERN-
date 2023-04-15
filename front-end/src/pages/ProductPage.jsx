import React from 'react';
import { useNavigate, useParams } from "react-router-dom"
import { FaArrowLeft } from 'react-icons/fa';
import {motion} from 'framer-motion'
import axios from 'axios';
import { useEffect, useState  } from 'react';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const [product,setProduct]=useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  console.log(product);

  const handleBackButtonClick = () => {
    navigate(-1); 
  };

  if (product) {
  
 
  return (
    <motion.div  initial={{ opacity: 0,y:100 }}
    animate={{ opacity: 1,y:0 }}
    exit={{ opacity: 0 ,y:-100}}
    transition={{ duration: 0.8 }} className="h-screen w-screen flex justify-center items-center">
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
              <span className="font-bold">Count in stock:</span>{" "}
              {product.countInStock}
            </p>
          </div>
          <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  ); }
  else{}
}

export default ProductDetails;
